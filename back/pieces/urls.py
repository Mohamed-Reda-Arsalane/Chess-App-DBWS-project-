from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from pieces import views

urlpatterns = [
    url(r'^piece$', views.pieceApi),
    url(r'^piece/([0-9]+)$', views.pieceApi),   
]