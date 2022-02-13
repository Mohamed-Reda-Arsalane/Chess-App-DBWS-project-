from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Opening.models import Opening
from Opening.serializers import OpeningsSerializer


@csrf_exempt
def openingApi(request, id=0):
    if request.method == "GET":
        openings = Opening.objects.all()
        openingsSerializer = OpeningsSerializer(openings, many=True)
        return JsonResponse(openingsSerializer.data, safe=False)
    elif request.method == "POST":
        opening_data = JSONParser().parse(request)
        openingsSerializer= OpeningsSerializer(data=opening_data)
        if openingsSerializer.is_valid():
            openingsSerializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == "DELETE":
        opening = Opening.objects.get(opening_ID=id)
        opening.delete()
        return JsonResponse("Deleted Succeffully", safe=False)