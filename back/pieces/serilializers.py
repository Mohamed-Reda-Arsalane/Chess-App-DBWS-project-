from rest_framework import serializers
from pieces.models import Piece

class Pieceserializers(serializers.ModelSerializer):
    class Meta:
        model = Piece
        fields = ('piece_ID', 'type', 'color')