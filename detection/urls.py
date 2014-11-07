from django.conf.urls import patterns, url
from detection import views

urlpatterns = patterns('',
	url(r'^index/$', views.index, name="index"),
	url(r'^test/(?P<says>\w+)/$', views.test, name="test"),
	url(r'^login/$', views.user_login, name="user_login"),
	url(r'^logout/$', views.user_logout, name="user_logout"),
	url(r'^register/$', views.register, name="register"),
	url(r'^sqlmap/$', views.sqlmap, name="sqlmap"),
	url(r'^maplog/$', views.maplog, name="maplog"),
#	url(r'^get_token/$', views.build_html_response, name="get_token"),
)