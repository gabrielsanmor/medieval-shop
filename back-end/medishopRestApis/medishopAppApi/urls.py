from django.urls import path
from .views import *

urlpatterns = [
    path('api/categoria', CategoriaList.as_view()),
    path('api/itens/<int:id>', ItemDetalheView.as_view()),
    path('api/itens',ItemList.as_view()),
    path('api/itens/<slug:categoria>',ItemCategoriaList.as_view()),
    path('api/user/<int:id>',UserDetalheView.as_view()),
    path('api/user',UserDetalheView.as_view()),
    path('api/cart',CarrinhoListView.as_view())
]
