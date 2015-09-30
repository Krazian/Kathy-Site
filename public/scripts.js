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
});

$(document).foundation()