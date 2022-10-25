from .models import *
from .serializers import *
from django.db.models import Q
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timedelta
import pytz
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
class CategoriaList(APIView):
    
    def get(self,request, format=None):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias,many=True)

        return Response(serializer.data)


class ItemList(APIView):
    
    def get(self,request, format=None):
        item = Item.objects.all()
        serializer = ItemSerializer(item,many=True,context={"request":request})
        return Response(serializer.data)

class ItemDetalheView(APIView):

    def get_item(self,id):
        try:
            return Item.objects.get(id=id)
        except Item.DoesNotExist:
            raise Http404

    def get(self,request,id,format=None):
        item = self.get_item(id)
        serializer = ItemSerializer(item,context={"request":request})
        return Response(serializer.data)

class ItemCategoriaList(APIView):

    def get_item(self,nome):
        try:
            return Item.objects.filter(categoria__nome__iexact=nome)
        except Item.DoesNotExist:
            raise Http404

    def get(self,request,categoria,format=None):
        item = self.get_item(categoria)
        print(categoria)
        serializer = ItemSerializer(item,many=True,context={"request":request})
        return Response(serializer.data)

class UserDetalheView(APIView):
    
    def get_item(self,id):
        try:
            return Usuario.objects.get(id=id)
        except Usuario.DoesNotExist:
            raise Http404

    def post_item(self,user):
        try:
            return Usuario.objects.get(user=user)
        except Usuario.DoesNotExist:
            raise Http404

    def get(self,request,id,format=None):
        user = self.get_item(id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def post(self, request,format=None):
        user = self.post_item(request.user)
        if(user.senha==request.senha):
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response({"message":"As senhas não coincidem"},status=status.HTTP_400_BAD_REQUEST)

class UserCriaView(APIView):
    
    def test_item(self,user,cpf):
        user=Usuario.objects.filter(Q(user=user)|Q(cpf=cpf))
        return user

    def post(self,request,format=None):
        
        if(len(self.test_item(request.data.get('user'),request.data.get('cpf')))==0):
            serializer = UserSerializerPost(data=request.data)
            if(serializer.is_valid()):
                serializer.save()
                return Response({"message":"Usuário cadastrado com sucesso"},status=status.HTTP_200_OK)
            return Response()
        else:
            return Response({"message":"User ou cpf já cadastrado"},status=status.HTTP_400_BAD_REQUEST)

class CarrinhoListView(APIView):

    def get_item(self,user):
        try:
            user=Usuario.objects.get(id=user)
            cart,bol=Cart.objects.get_or_create(user=user)
            if(bol):
                utc=pytz.UTC
                a=datetime.now().replace(tzinfo=utc)
                if(cart.criado_em>a+timedelta(days=1)):
                    cart.delete()
                    cart=Cart()
                    cart.user=user
                    cart.save()
                return cart
            else:
                cart.save()
                return cart
        except: Usuario.DoesNotExist
        raise Http404

    def get(self,request,id,format=None):
        cart = self.get_item(id)
        serializer = CartSerializer(cart,context={'request':request})
        return Response(serializer.data)

    def put(self, request,id,format=None):
        cart= Cart.objects.get(user=id)
        cartItem,b=CartItem.objects.get_or_create(cart=cart,item=request.data.get('item'))
        serializer = CartItemSerializer(cartItem,data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response({"message":"Algum problema aconteceu"},status=status.HTTP_400_BAD_REQUEST)