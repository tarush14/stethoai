$(document).ready(function()
 {
	//Hides the other slides initially
	$(".slide2").hide();
	$(".slide3").hide();
	
	//Shows slide 1
    $('#slide1').click(function(){
		$(".slide2").hide();
		$(".slide3").hide();
		$(".slide1").addClass("animated zoomIn");
		$(".slide1").show();
	});
	//Shows slide 2
	 $('#slide2').click(function(){
		$(".slide1").hide();
		$(".slide3").hide();
		$(".slide2").addClass("animated zoomIn");
		$(".slide2").show();
	});
	//Shows slide 3
	$('#slide3').click(function(){
		$(".slide2").hide();
		$(".slide1").hide();
		$(".slide3").addClass("animated zoomIn");
		$(".slide3").show();
	});
 });
 

