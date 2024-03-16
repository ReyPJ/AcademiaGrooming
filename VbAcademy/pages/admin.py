from django.contrib import admin
from .models import Page


# Register your models here.

# Registramos el modelo en la pagina admin
class PageAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('title', 'order')


# Importante esto para registraro
admin.site.register(Page, PageAdmin)
