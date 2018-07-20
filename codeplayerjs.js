$(document).ready(function(){
    $("button").hover(function(){
		$(this).addClass("onhover");
	},function(){
		$(this).removeClass("onhover");
	});
	$("button").click(function(){
		$(this).toggleClass("active");
	});
    $("button").click(function (){
		$($(this).attr('href')).toggleClass("auto"); 
	});
	function upDate(){
	    $("#output").contents().find("html").html("<html><head><style type='text/css'>" +
		$("#css").val() + "</style></head><body>" + 
		$("#html").val() + "</body></html>");
		
		document.getElementById("output").contentWindow.eval($("#javascript").val());
	}
	upDate();
    $("textarea").on("change keyup paste",function(){
		upDate();
	});
});
    