$(function(){
	$("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
	$("input[type=file]").each(function(){
	if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("No file selected...");}
	});


$("#toggleLogin").click(function(){
	$(".Registerbox").animate({ height : 0 } , 500 ); 
	if( $(".loginbox").height()==0){
		$(".loginbox").animate({ height : 180 } , 500 );}
	else{ $(".loginbox").animate({ height : 0 } , 500 );}});
	
$("#toggleRegister").click(function(){
	$(".loginbox").animate({ height : 0 } , 500 ); 
	if( $(".Registerbox").height()==0){
		$(".Registerbox").animate({ height : 240 } , 500 );}
	else{ $(".Registerbox").animate({ height : 0 } , 500 );}});


$("#closeLogin").click(function(){
		        $(".loginbox").animate({ height : 0 } , 500 );
		   });
		   
$("#closeRegister").click(function(){
		        $(".Registerbox").animate({ height : 0 } , 500 ); 
		   });
});

function maininfo(name)
{
var mxmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  mxmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  mxmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
mxmlhttp.onreadystatechange=function()
  {
  if (mxmlhttp.readyState==4 && mxmlhttp.status==200)
    {
    document.getElementById("main").innerHTML=mxmlhttp.responseText;
    }
  }
mxmlhttp.open("GET","../info/?infoname="+name,true);
mxmlhttp.send();
}

function sqlmap()
{
var sqlxmlhttp;
var url;
var csrfsql;
url = document.getElementById('url').value;

csrfsql = document.getElementById('csrf').value;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  sqlxmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  sqlxmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
sqlxmlhttp.onreadystatechange=function()
  {
    if (sqlresxmlhttp.readyState==4 && sqlresxmlhttp.status==200)
    {
	while(1)
	{
		setTimeout('sqlres(url)',2000);
	}
}
  }
sqlxmlhttp.open("POST","../../sqlmap/",true);
sqlxmlhttp.send("url="+url+"&csrfmiddlewaretoken="+csrfsql);

}

function sqlres(uri)
{
var sqlresxmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  sqlresxmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  sqlresxmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
sqlresxmlhttp.onreadystatechange=function()
  {
  if (sqlresxmlhttp.readyState==4 && sqlresxmlhttp.status==200)
    {
    document.getElementById("sqloutput").innerHTML=sqlresxmlhttp.responseText;
    }
  }
sqlresxmlhttp.open("GET","../../sqlmap/?file="+uri,true);
sqlresxmlhttp.send();
}

function webchkdiv(val){
	var csrfsql = document.getElementById("csrf").value
	if(val == "Upload"){
	document.getElementById("webchk").innerHTML="<form id=\"st1\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\"><div class=\"uploader black\"><input type=\"text\" class=\"filename\" readonly/><input type=\"button\" name=\"file\" class=\"button\" value=\"Browse...\"/><input type=\"file\" size=\"30\"/></div>&nbsp;<div class=\"uploader black\"><input type=\"submit\" name=\"submit_upload\" class=\"button\" value=\"submit\"/></div></form>";
	}else{
	document.getElementById("webchk").innerHTML="<form id=\"st1\"><div class=\"uploader black\"><input type=\"text\" class=\"filename\" id=\"url\" /></div>&nbsp;&nbsp;<div class=\"uploader black\"><input type=\"button\" name=\"submit_upload\" class=\"button\" value=\"submit\"/ onclick=\"sqlmap()\"></div></form>"
	}
}