from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from pieces.models import Piece
from pieces.serilializers import Pieceserializers


@csrf_exempt
def pieceApi(request, id=0):
    if request.method == "GET":
        openings = Piece.objects.all()
        openingsSerializer = Pieceserializers(openings, many=True)
        return JsonResponse(openingsSerializer.data, safe=False)
    elif request.method == "POST":
        opening_data = JSONParser().parse(request)
        openingsSerializer= Pieceserializers(data=opening_data)
        if openingsSerializer.is_valid():
            openingsSerializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == "DELETE":
        opening = Piece.objects.get(piece_ID=id)
        opening.delete()
        return JsonResponse("Deleted Succeffully", safe=False)