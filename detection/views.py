# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.middleware.csrf import get_token
from detection import Maplog
import re

def build_html_response(request):
    # build head
    try:
        csrftoken = get_token(request)
        csrftoken_input = '''<input type='hidden' id='csrf' name='csrfmiddlewaretoken' value='%s' />''' % csrftoken
    except:
        csrftoken_input = ''
    return csrftoken_input

def index(request):
	csrftoken = build_html_response(request)
	return render_to_response('detection/index.html', {'csrftoken': csrftoken}, RequestContext(request))

def test(request, says):
	return render_to_response('detection/test.html', {'says': says}, RequestContext(request))

def user_login(request):
	msg = ""
	registered = False
	if request.method == 'POST':
		username = request.POST['name']
		password = request.POST['pass']
		msg = name_check(username)
		if msg != "":
			return HttpResponse(combined_msg(registered, msg)) 		
		user = authenticate(username=username, password=password)
		if user:
			if user.is_active:
				login(request, user)
				return HttpResponse("Login successfully ! <br /><br />Auto go back in 3 sec .<br /><br />")
			else:
				return HttpResponse("Account disable !<br /><br />Auto go back in 3 sec .<br /><br />")
		else:
			return HttpResponse("Incorrect username or password !<br /><br />Auto go back in 3 sec .<br /><br />")
	else:
		return HttpResponseRedirect('/index/')

def user_logout(request):
	logout(request)
	return HttpResponseRedirect('/index/')

def register(request):
	msg = ""
	registered = False
	if request.method == 'POST':
		username = request.POST['rname']
		pwd = request.POST['rpass']
		conpwd = request.POST['rconpass']
		email = request.POST['rmail']
		msg = name_check(username)
		if msg == "":
			msg = email_check(email)
			if msg == "":
				if pwd == conpwd:
					try:
						User.objects.get(username__exact=username)
					except ObjectDoesNotExist:
						try:
							User.objects.get(email__exact=email)
						except ObjectDoesNotExist:
							user = User.objects.create_user(username=username, password=pwd, email=email)	
							if user:
								user.is_staff = False
								user.save()
								registered = True
								return HttpResponse(combined_msg(registered, msg))
							else:
								msg = "Register failed"
						msg = "Email address used"	

				else:
					msg = "Please confirm your password"
	return HttpResponse(combined_msg(registered, msg))


def name_check(name):
	ulenth = len(name)
	if ulenth < 6 or ulenth > 20:
		return "The length of username should be 6-20"
	ills = ["\"","'","(",")","\\","/"]
	for i in ills:
		if name.find(i) != -1:
			return i+"Illegal username"
	return ""

def email_check(email):
	length = len(email)
	pattern = re.compile(r'\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*')
	if email > 30:
		return "The length of email address should be 1-30"
	if not pattern.match(email):
		return "Illegal email address"
	return ""

def combined_msg(success, msg):
	if success:
		premsg = "Successfully"
	else:
		premsg = ":("	
	return  premsg+ "<br />" + msg + "<br />" + "Auto go back in 3 sec .<br /><br />"

def sqlmap(request):
	if request.method == 'POST':
		if not user.is_authenticated:
			return HttpResponseRedirect('/index/')
		pattern = re.compile(r'[a-zA-z]+://[^\s]*')
		url = request.POST['url']
		if pattern.match(url):
			maplog = Maplog(user=user, url=url)
			if maplog:
				maplog.save()
		else:
			return HttpResponse("Invalid url")
	return HttpResponseRedirect('/user/')	

def maplog(request):
	