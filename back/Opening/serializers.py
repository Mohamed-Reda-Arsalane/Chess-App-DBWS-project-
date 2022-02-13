from rest_framework import serializers
from Opening.models import Opening

class OpeningsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opening
        fields = ('opening_ID', 'name', 'sequence_of_moves', 'Description')