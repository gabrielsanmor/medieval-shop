# //from urllib import request
from pickle import TRUE
from rest_framework import serializers
from .models import *

class ItemSerializer(serializers.ModelSerializer):
    imagem_url = serializers.SerializerMethodField()

    def get_imagem_url(self,item):
        request = self.context.get('request')
        imagem_url = item.imagem.url
        return request.build_absolute_uri(imagem_url)

    class Meta:
        model = Item
        fields = ('id','nome','descricao','preco','quantidade','imagem_url','categoria')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id','nome')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id','user','nome','cpf')

class UserSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id','user','senha','nome','cpf')

class CartItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer()
    class Meta:
        model = CartItem
        fields = ('id','item','quantidade')

class CartSerializer(serializers.ModelSerializer):
    itens_cart = CartItemSerializer(many=True)
    class Meta:
        model = Cart
        fields = ('id','criado_em','user','itens_cart')