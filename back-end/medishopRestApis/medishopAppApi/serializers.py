from rest_framework import serializers
from . import models

class CategoriaSerializer(serializers.ModelSerializer):
    items = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='nome'
    )