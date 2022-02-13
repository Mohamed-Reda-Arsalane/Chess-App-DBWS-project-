from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from Game import views

urlpatterns = [
    url(r'^game$', views.GameAPI),
    url(r'^game/([0-9]+)$', views.GameAPI),   
]