$.fn.isNearTheEnd = function() {
  // remember inside of $.fn.whatever = function() {}
  //   this is the jQuery object the function is called on.
  //   this[0] is DOMElement
    return this[0].scrollTop + this.height() >= this[0].scrollHeight;
};

// an example.
$("#content").bind("scroll", function() {
  if ($(this).isNearTheEnd()); // load some content
});




//Scroll to
$('html, body').animate({
    scrollTop: $("#header").offset().top
}, 0, function() {
	$('body').animate({'opacity':1},400);
});

$('.header-info').on('click', function(e) {
	e.preventDefault();

	$('html,body').animate({
		scrollTop: $('#about').offset().top
	}, 400);
});