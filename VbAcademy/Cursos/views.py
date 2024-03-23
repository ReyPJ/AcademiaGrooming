from django.shortcuts import render, get_object_or_404
from .models import Curso

def cursos(request):
    cursos = Curso.objects.all()
    return render(request, 'templates/cursos/cursos.html', {'cursos': cursos})