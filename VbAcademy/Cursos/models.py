from django.db import models
from ckeditor.fields import RichTextField


# Defino la ruta para que borre el fichero pasado

class Curso(models.Model):
    # Agrego imagen en el modelo, se debe cargar en un fichero media, ver settings al finar para encontrar lo que digo,
    image = models.ImageField(verbose_name='Imagen', upload_to='Cursos', null=True, blank=True)
    titulo = models.CharField(verbose_name="Título del curso", max_length=200)
    detalles = RichTextField(verbose_name="Detalles del curso")
    campos_disponibles = models.IntegerField(verbose_name="Campos Disponibles", default=0)
    precio = models.DecimalField(verbose_name="Precio", max_digits=10, decimal_places=2, default=0)
    oferta = models.DecimalField(verbose_name="Oferta/Descuento", max_digits=5, decimal_places=2, default=0)
    fecha_caducidad = models.DateTimeField(verbose_name="Fecha de caducidad")

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"
        ordering = ['campos_disponibles']

    def __str__(self):
        return self.titulo
