function ScrollDown(elem, scrollTo, speed) {
	this.elem = elem;
	this.scrollTo = scrollTo;
	if (!speed) {
		speed = 400;
	}
	this.speed = speed;
	this.scroll = function () {
		var scrollToOffset = $(scrollTo).offset().top;
		$(elem).on('click', function() {
			$('body').animate({
				scrollTop : scrollToOffset
			}, speed);
		});
	}
	this.scroll();
}