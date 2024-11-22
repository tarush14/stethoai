/*CHANGES IN 
NAV BAR*
WHEN SCROLLED
DOWN*/

$(window).scroll(function() {
	//decrease when scrolled down
  if ($(document).scrollTop() > 30) {
    $('#navigation-bar').addClass('navbarScroll');
  } 
  //initial size when back to top
  else {
    $('#navigation-bar').removeClass('navbarScroll');
  }
  
});

function addBackground(){
	$("#navigation-bar").toggleClass("navbarBgToggle");
}
