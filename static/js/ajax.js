function loadXMLDoc()
{
var xmlhttp;
var uname;
var upass;
var csrf;

uname = document.getElementById('log').value;
upass = document.getElementById('pwd').value;
csrf = document.getElementById('csrf').value;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("tip").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","../login/",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("name="+uname+"&pass="+upass+"&csrfmiddlewaretoken="+csrf);
setTimeout('comeon()',2000);
}

function comeon(){
document.getElementById('light').style.display='block'; document.getElementById('fade').style.display='block';

var content = document.getElementById("tip").innerText;
if(content.indexOf("successfully")<0){
	setTimeout('closetip()',3000);
}else{
	setTimeout('turnback()',3000);
}
}

function closetip()
{
	document.getElementById('light').style.display='none';	    document.getElementById('fade').style.display='none';
	document.getElementById("tip").innerText = "";
}

function turnback(){
	document.getElementById("tip").innerText = "";
	self.location.href="./";
}

function rloadXMLDoc()
{
var rxmlhttp;
var rname;
var rpass;
var rconpass;
var rmail;
rname = document.getElementById('rlog').value;
rpass = document.getElementById('rpwd').value;
rconpass = document.getElementById('rconpwd').value;
rmail = document.getElementById('rmail').value;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  rxmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  rxmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
rxmlhttp.onreadystatechange=function()
  {
  if (rxmlhttp.readyState==4 && rxmlhttp.status==200)
    {
    document.getElementById("tip").innerHTML=rxmlhttp.responseText;
    }
  }
rxmlhttp.open("POST","../register/",true);
rxmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
rxmlhttp.send("rname="+rname+"&rpass="+rpass+"&rconpass="+rconpass+"&rmail="+rmail);
setTimeout('comeon()',2000);
}

function getinfo(name)
{
var ixmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  ixmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  ixmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
ixmlhttp.onreadystatechange=function()
  {
  if (ixmlhttp.readyState==4 && ixmlhttp.status==200)
    {
    document.getElementById("mm").innerHTML=ixmlhttp.responseText;
    }
  }
ixmlhttp.open("GET","../information/?infoname="+name,true);
ixmlhttp.send();
}