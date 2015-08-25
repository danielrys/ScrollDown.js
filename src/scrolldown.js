function ScrollDown(elem, scrollTo, speed) {
	this.elem = elem;
	if (!scrollTo) {
		scrollTo = $(elem).attr('href');
	}
	this.scrollTo = scrollTo;
	if (!speed) {
		speed = 400;
	}
	this.speed = speed;
	
	if(typeof scrollTo != 'undefined' && $(scrollTo).length) {
		trueSpeed = Math.abs($(window).scrollTop() - $(scrollTo).offset().top) / (speed / 100);
	} else {
		return;	
	}

	this.scroll = function () {
		var scrollToOffset = $(scrollTo).offset().top;
		$(elem).on('click', function() {
			$('body').animate({
				scrollTop : scrollToOffset
			}, trueSpeed);
		});
	}
	this.scroll();
}