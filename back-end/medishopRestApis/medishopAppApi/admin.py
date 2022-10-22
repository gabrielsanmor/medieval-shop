from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Item)
admin.site.register(Usuario)
admin.site.register(CartItem)
admin.site.register(Cart)