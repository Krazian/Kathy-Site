$(document).ready(function(){
	//adds all pictures to the DOM
	for (var i = 1; i <= 17; i++){
		var img = $('<img>');
		img.attr('src', '/../images/headshots/'+i+'.jpg');
		img.addClass('image');
		img.appendTo('.headshots');
	}
	for (var i = 1; i <= 4; i++){
		var img = $('<img>');
		img.attr('src', '/../images/weddingprom/'+i+'.jpg');
		img.addClass('image');
		img.appendTo('.wedding-and-prom');
	}
	for (var i = 1; i <= 5; i++){
		var img = $('<img>');
		img.attr('src', '/../images/beforeafter/'+i+'.jpg');
		img.addClass('image');
		img.appendTo('.before-and-after');
	}

	//image carousel
  $('.headshots').slick({
    slidesToShow: 5,
    slidesToScroll: 4,
  	infinite: true,
    autoplay: true,
    autoPlaySpeed: 3000,
  	dots: true,
    arrows: true,
    pauseOnHover: true
  });

  //image carousel
  $('.wedding-and-prom').slick({
    slidesToShow: 5,
    slidesToScroll: 4,
  	infinite: true,
    autoplay: true,
    autoPlaySpeed: 3000,
  	dots: true,
    arrows: true,
    pauseOnHover: true
  });

  //image carousel
  $('.before-and-after').slick({
    slidesToShow: 5,
    slidesToScroll: 4,
  	infinite: true,
    autoplay: true,
    autoPlaySpeed: 3000,
  	dots: true,
    arrows: true,
    pauseOnHover: true
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