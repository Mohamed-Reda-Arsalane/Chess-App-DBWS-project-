from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Game.models import Game
from Game.serializers import Gameserializers

@csrf_exempt
def GameAPI(request, id=0):
    if request.method == "GET":
        games = Game.objects.all()
        gamesSerializer = Gameserializers(games, many=True)
        return JsonResponse(gamesSerializer.data, safe=False)
    elif request.method == "POST":
        game_data = JSONParser().parse(request)
        gamesSerializer= Gameserializers(data=game_data)
        if gamesSerializer.is_valid():
            gamesSerializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == "DELETE":
        game = Game.objects.get(Game_ID=id)
        game.delete()
        return JsonResponse("Deleted Succeffully", safe=False)