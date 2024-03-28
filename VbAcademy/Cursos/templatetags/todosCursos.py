from django import template
from Cursos.models import Curso

register = template.Library()


@register.simple_tag()
def get_all_cursos():
    cursos = Curso.objects.all()
    return cursos
