from .models import *
from .serializers import *
from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta
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
            return Item.objects.filter(categoria__nome=nome)
        except Item.DoesNotExist:
            raise Http404

    def get(self,request,categoria,format=None):
        item = self.get_item(categoria)
        serializer = ItemSerializer(item,context={"request":request})
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
            return Response({"message":"As senhas não coincidem"})

class CarrinhoListView(APIView):

    def get_item(self,user):
        try:
            cart=Cart.objects.get(user_id=user)
            if(cart.criado_em>datetime.now()+timedelta(days=1)):
                cart.delete()
                cart = Cart()
                cart.user=Usuario.objects.get(id=user)
                cart.save()

        except Cart.DoesNotExist:
            cart=Cart()
            cart.user=Usuario.objects.get(id=user)
            cart.save()
        
        return cart

    def post(self,request,format=None):
        cart = self.get_item(request.user)
        serializer = CartSerializer(cart,context={'request':request})
        return Response(serializer.data)