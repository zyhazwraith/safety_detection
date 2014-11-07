$(function(){
	$("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
	$("input[type=file]").each(function(){
	if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("No file selected...");}
	});

/*
$("#toggleLogin").toggle(function(){ 
				$("#Register").parent("div").animate({ height : 0 } , 500 ); 

		        $("#login").parent("div").animate({ height : 200 } , 500 );
				
				$(this).blur();
		   },function(){
			    $("#Register").parent("div").animate({ height : 0 } , 500 ); 
				if( $("#login").parent("div").height()==0){
			    $("#login").parent("div").animate({ height : 200 } , 500 );}
				else{ $("#login").parent("div").animate({ height : 0 } , 500 );}
				$(this).blur();
		   });
		   $("#closeLogin").click(function(){
		        $("#login").parent("div").animate({ height : 0 } , 500 );
		   });

	$("#toggleRegister").toggle(function(){
				$("#login").parent("div").animate({ height : 0 } , 500 );
		        $("#Register").parent("div").animate({ height : 250 } , 500 );
				$(this).blur();
		   },function(){
			    $("#login").parent("div").animate({ height : 0 } , 500 );
			    if( $("#Register").parent("div").height()==0){
			    $("#Register").parent("div").animate({ height : 250 } , 500 );}
				else{ $("#Register").parent("div").animate({ height : 0 } , 500 );}
				$(this).blur();
		   });
		   $("#closeRegister").click(function(){
		        $("#Register").parent("div").animate({ height : 0 } , 500 ); 
		   });*/

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
});