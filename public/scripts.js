$(document).ready(function(){
	//adds all pictures to the DOM
	for (var i = 1; i < 28; i++){
		var img = $('<img>');
		img.attr('src', '/../images/'+i+'a.jpg');
		img.addClass('image');
		img.appendTo('.images-preview');
	}

	//image carousel
  $('.images-preview').slick({
    slidesToShow: 5,
    slidesToScroll: 4,
  	infinite: true,
    autoplay: true,
    autoPlaySpeed: 200,
  	dots: true,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true
  });

  //click events for modals
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