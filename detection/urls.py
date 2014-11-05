from django.conf.urls import patterns, url
from detection import views

urlpatterns = patterns('',
	url(r'^index/$', views.index, name="index"),
	url(r'^test/(?P<says>\w+)/$', views.test, name="test"),
)