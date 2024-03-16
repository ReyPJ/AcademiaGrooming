from django.apps import AppConfig

# Cambiamos nombre de la app
class PagesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'pages'
    verbose_name = 'Paginas Secundarias'
