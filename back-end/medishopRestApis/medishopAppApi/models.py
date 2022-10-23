# from email.policy import default
from django.db import models

# Create your models here.
class Categoria(models.Model):
    
    nome = models.CharField(max_length=200)

    def __str__(self):
        return self.nome

class Item(models.Model):
    
    nome = models.CharField(max_length=200)
    descricao = models.TextField(max_length=2000,blank=True)
    preco = models.DecimalField(max_digits=6,decimal_places=2)
    quantidade = models.PositiveIntegerField(default=0)
    imagem = models.ImageField(upload_to='items',blank=True,null=True)
    categoria = models.ForeignKey(Categoria,related_name='items',on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nome
    
class Usuario(models.Model):
    
    user = models.CharField(max_length = 25)
    senha = models.CharField(max_length = 25)
    nome = models.CharField(max_length = 200)
    cpf = models.CharField(max_length=11)
    
    def __str__(self):
        return self.user
    
class Cart(models.Model):
    
    criado_em = models.DateTimeField(auto_now_add=True, blank=True)
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.nome 
    
class CartItem(models.Model):
    
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(null=True)
    cart = models.ForeignKey(Cart, related_name='itens_cart',on_delete=models.CASCADE)