$("#doc").click(function(){
	window.location = "doc.html";
});
<<<<<<< HEAD

$("#pat").click(function(){
	window.location = "patient.html";
});

$("#patbutton").click(function(){
	window.location = "./webvr/index.html";
});

=======
$("#sub").click(function(){
	if($("#email").val() == "admin"  && $("#password").val() == "admin"){
		window.location = "try-me-publisher/index.html";
	}
});

$("#pat").click(function(){
	window.location = "try-me-subscriber/index.html";
});
>>>>>>> a7dfb95b841feb95075b92f967129b91944a1394
