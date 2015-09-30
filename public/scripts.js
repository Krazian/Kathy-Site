$(document).ready(function(){
	for (var i = 1; i < 25; i++){
		var img = $('<img>');
		img.attr('src', '/../images/'+i+'.jpg');
		img.appendTo('.images');
	}

  $('.images').slick({
  	dots: true,
  	infinite: true,
    autoplay: true,
    autoPlaySpeed: 200,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    touchToMove: true
  });

  $(".about").click(function () {
    $('#aboutModal').foundation('reveal', 'open');
});
  $(".testimonials").click(function () {
    $('#testimonialsModal').foundation('reveal', 'open');
});
  $(".contact").click(function () {
    $('#contactModal').foundation('reveal', 'open');
});
});