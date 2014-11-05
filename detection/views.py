# Create your views here.
from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response

def index(request):
	return HttpResponse("Hello")

def test(request, says):
	return render_to_response('detection/test.html', {'says': says}, RequestContext(request))