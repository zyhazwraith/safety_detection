from django.contrib import admin
from detection.models import Maplog

class MapAdmin(admin.ModelAdmin):
	list_display = ('user', 'date', 'url')

admin.site.register(Maplog, MapAdmin)
