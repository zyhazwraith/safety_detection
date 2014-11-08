from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Maplog(models.Model):
	user = models.OneToOneField(User)
	date = models.DateTimeField(auto_now=True)
	url = models.URLField()

#	def __unicode__(self):
#		return u"%s" % user.username