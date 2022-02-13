from rest_framework import serializers
from Game.models import Game

class Gameserializers(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('Game_ID', 'Player_one', 'Player_two')