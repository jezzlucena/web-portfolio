var Main = {};

Main.onLoad = function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		$('.playerBar').css('display', 'none');
	} else {
		// HACK: Getting rid of the player bar for now.
		$('.playerBar').css('display', 'none');
	}

	$('.headerContent').addClass('loaded');

	var magPopOptions = {
		type: 'image',
		gallery:{
			enabled:true
		},
		midClick: true,

		removalDelay: 300,
		mainClass: 'mfp-slide-bottom'
	};

	$('.haystackImg').magnificPopup(magPopOptions);
	$('.dissentImg').magnificPopup(magPopOptions);
	$('.timeImg').magnificPopup(magPopOptions);
	$('.destinyImg').magnificPopup(magPopOptions);
	$('.virusImg').magnificPopup(magPopOptions);
	$('.trafficImg').magnificPopup(magPopOptions);
	$('.pongImg').magnificPopup(magPopOptions);
	$('.cocaImg').magnificPopup(magPopOptions);
	$('.bandImg').magnificPopup(magPopOptions);
	$('.hyundaiImg').magnificPopup(magPopOptions);
	$('.climatempoImg').magnificPopup(magPopOptions);
	$('.boraImg').magnificPopup(magPopOptions);
	$('.eesImg').magnificPopup(magPopOptions);

	$(window).scroll(function(){
		Main.triggerItemsOnScreen();

		if ($('.playerBar')[0].offsetTop < $(document).scrollTop()){
			$(".playerBar").css({position: "fixed", top:0});
		}

		if ($(document).scrollTop() < $(".content")[0].offsetTop){
			$(".playerBar").css({position: "absolute", top: 0});
		}
	});

	if (YoutubeController) {
		YoutubeController.init();
	}
};

Main.onUnload = function(){
};

Main.isDevice = function(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

Main.triggerItemsOnScreen = function(){
	$('.trigger').each(function(index){
		if($(this).isOnScreen()){
			$(this).addClass('triggered');
		} else {
			$(this).removeClass('triggered');
		}
	});
};

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
