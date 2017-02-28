$(function() {
	var slider = $('.slider'),
	sliderContent = slider.html(),
	sliderWidth = $('.slider-box').outerWidth(),
	sliderCount = $('.slider img').length,
	prev = $('.slider-box .prev'),
	next = $('.slider-box .next'),
	sliderInteval = 3300,
	animateTime = 1000,
	course = 1,
	margin = - sliderWidth;

	$('.slider img:last').clone().prependTo('.slider');
	$('.slider img').eq(1).clone().appendTo('.slider');
	$('.slider').css('margin-left', -sliderWidth);

	function nextSlide() {
		interval = window.setInterval(animate, sliderInteval);
	}

	function animate() {
		if (margin==-sliderCount*sliderWidth) {
			slider.css({'marginLeft': -sliderWidth});
			margin=-sliderWidth*2;
		} else if (margin==0 && course==-1) {
			slider.css({'marginLeft': -sliderWidth*sliderCount});
			margin=-sliderWidth*sliderCount+sliderWidth;
		} else {
			margin = margin - sliderWidth*(course);
		}
		slider.animate({'marginLeft':margin}, animateTime);
	}
	function sliderStop() {
		window.clearInterval(interval);
	}

	prev.click(function() {
		if (slider.is(':animated')) { return false; }
		var course2 = course;
		course = -1;
		animate();
		course = course2;
	});
	next.click(function() {
		if (slider.is(':animated')) { return false; }
		var course2 = course;
		course = 1;
		animate();
		course = course2;
	});

	slider.add(next).add(prev).hover(function() {
		sliderStop();
	}, nextSlide);

	nextSlide();
});