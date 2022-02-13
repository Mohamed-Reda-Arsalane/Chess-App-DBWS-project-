from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from Opening import views

urlpatterns = [
    url(r'^opening$', views.openingApi),
    url(r'^opening/([0-9]+)$', views.openingApi),   
]