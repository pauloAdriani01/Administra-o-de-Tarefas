#Leva os usuários ao determinado conteúdo dentro do site

from django.urls import path
from . import views

urlpatterns = [
    path('', views.homeTarefas, name='homeTarefas'),
]