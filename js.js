/* Darken Navbar on Scroll */
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

/* Scrollspy */

$('body').scrollspy({ target: '#navbar' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});
