from django.contrib import admin
from detection.models import Maplog

class MapAmin(admin.ModelAdmin):
	list_display = ('username', 'date', 'url')

admin.site.register(Maplog)
