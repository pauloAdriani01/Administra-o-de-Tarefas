#Página para criação de "views" , onde recebem solicitações HTTP devolvendo respostas HTTP (como documentos HTML)

from django.http import HttpResponse
from django.template import loader

def homeTarefas(request): 
    template = loader.get_template('homeTarefas.html')
    return HttpResponse(template.render())

