var a1=0;
var a2=0;
var a3=0;
var a4=0; 



function check_name(thisObj){ 
	if(thisObj.value.length==0) 
	{ 
		document.getElementById('rtip').innerHTML="Username can't be NULL"; 
		a1=0;
		return false; 
	}else{ 
		if (thisObj.value.length<3 || thisObj.value.length>20) 
		{ 
			document.getElementById('rtip').innerHTML="The lenth of username should be 3 - 20";
			a1=0; 
			return false; 
		} 
		else{
			Validate(thisObj.value)
			a1=1;
			return true;
		}
	} 
}

function check_len(thisObj){ 
	if(thisObj.value.length==0) 
	{ 
		document.getElementById('rtip').innerHTML="Password can't be NULL"; 
		a2=0;
		return false; 
	}
	if (thisObj.value.length<6 || thisObj.value.length>20) 
	{ 
		document.getElementById('rtip').innerHTML="The lenth of password should be 6 - 20"; 
		a2=0;
		return false; 
	}  
		document.getElementById('rtip').innerHTML="";
		a2=1;
		return true; 

}

function check_pass(thisObj,rpwd){ 
	if (thisObj.value==rpwd.value) 
	{ 	
		document.getElementById('rtip').innerHTML="";
		a3=1;   
		return true; 
	} else{
		document.getElementById('rtip').innerHTML="Two passwords aren't the same";
		a3=0;    
		return false;
	} 
}

function check_mail(thisObj){ 
	 var reg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	var rzt=thisObj.value.match(reg); 
	if (!rzt) 
	{ 
		document.getElementById('rtip').innerHTML="E-mail is wrong"; 
		a4=0; 
		return false; 
	} 
	document.getElementById('rtip').innerHTML="";
	a4=1; 
	return true; 
}

var xmlobj; //����XMLHttpRequest����
function CreateXMLHttpRequest()
{
	if(window.XMLHttpRequest)
	{//Mozilla�����
		xmlobj=new XMLHttpRequest();
		if(xmlobj.overrideMimeType)
		{//����MIME���
			xmlobj.overrideMimeType("text/xml");
		}
	}
	else if(window.ActiveXObject)
	{ //IE�����
		try
		{
			xmlobj=new ActiveXObject("Msxml2.XMLHttp");
		}
		catch(e)
		{
			try
			{
				xmlobj=new ActiveXobject("Microsoft.XMLHttp");
			}
			catch(e)
			{
			}
		}
	}
}
function Validate(username) //��������
{
	CreateXMLHttpRequest(); //��������
	var dburl = "./user/user_check.php?username=" + username; //����URL
	xmlobj.open("GET", dburl, true); //����validate.php
	xmlobj.onreadystatechange = StatHandler; //�ж�URL���õ�״ֵ̬������
	xmlobj.send(null); //����Ϊ�����͸��������κ�����
}
function StatHandler() { //���ڴ���״̬�ĺ���
	if(xmlobj.readyState == 4 && xmlobj.status == 200) //���URL�ɹ����ʣ��������ҳ 
	{
		if(xmlobj.responseText=="ok"){
			return true; 
			
		}else{
			document.getElementById('rtip').innerHTML="The username had been signed up already";
			return false;    
			
		}
	}
}



