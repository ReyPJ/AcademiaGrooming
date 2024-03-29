"""
URL configuration for VbAcademy project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings # Importo las settings

urlpatterns = [
    path('', include('core.urls')),
    path('page/', include('pages.urls')),
    path('cursos/', include('Cursos.urls')),  # Agregar la URL de la aplicación de cursos
    path('admin/', admin.site.urls), 
]


# Hago esto porque como no esta en produccion, de otra forma,
# no podriamos ver las imagenes.
if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
