from rest_framework import serializers
from .models import NftCard


class NftCardSerializer(serializers.ModelSerializer):
  class Meta:
    model = NftCard
    fields = ('text', 'subtext', 'image')