from django.contrib import admin
from .models import Curso


class CursoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'image', 'campos_disponibles', 'precio', 'oferta', 'fecha_caducidad')
    list_filter = ('fecha_caducidad',)
    search_fields = ('titulo', 'detalles')


admin.site.register(Curso, CursoAdmin)
