from django.db.models import Model
from django.contrib.auth.models import User

# Create your models here.

def SQLmap_log(Model):
	user = models.OneToOne(User)
	date = models.DateTimeField(auto_now=True)
	url = models.URLField()