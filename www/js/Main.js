var Main = {};

Main.onLoad = function(){
	$('.headerContent').addClass('loaded');

	$(window).scroll(function(){
		Main.triggerScrollClasses();
	});

	Main.triggerScrollClasses();
};

Main.onUnload = function(){
};

Main.isDevice = function(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

Main.triggerScrollClasses = function(){
	let scrollTop = $(window).scrollTop();
	let windowHeight = window.innerHeight;

	$('body').toggleClass('scrolled', (scrollTop > 0));
	$('body').toggleClass('foldPassed', (scrollTop > windowHeight/2));

	$('.trigger').each(function(index){
		if($(this).isOnScreen()){
			$(this).addClass('triggered');
		} else {
			$(this).removeClass('triggered');
		}
	});
}

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
