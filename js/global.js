$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['first','second','third','fourth','fifth'],
		navigation: true,
		navigationPosition: 'right',
	});
});
$(document).ready(function() {
	var top = $("#four .circle img.top");
	var middle = $("#four .circle img.middle");
	var bottom = $("#four .circle img.bottom");
	var buttonright = $("#four .button.right");
	var buttonleft = $("#four .button.left");
	
  	buttonleft.click(function() {
  		var button = $("#four .button.left");
  		if (!top.hasClass("transparent") && !middle.hasClass("transparent") && !bottom.hasClass("transparent")) { // Om startläge, visa 74
	  		top.toggleClass("transparent");
	  		middle.toggleClass("transparent");
	  		buttonleft.toggleClass("down");
	  	}
	  	else if(top.hasClass("transparent") && middle.hasClass("transparent") && !bottom.hasClass("transparent")) { // Om 74, visa start
		  	top.toggleClass("transparent");
	  		middle.toggleClass("transparent");
	  		buttonleft.toggleClass("down");
	  	}
	  	else if(top.hasClass("transparent") && !middle.hasClass("transparent") && bottom.hasClass("transparent")) { // Om 21, visa 74
		  	middle.toggleClass("transparent");
		  	bottom.toggleClass("transparent");
		  	buttonright.toggleClass("down");
		  	buttonleft.toggleClass("down");
	  	}
   	});
  	buttonright.click(function() {
	  	if (!top.hasClass("transparent") && !middle.hasClass("transparent") && !bottom.hasClass("transparent")) { // Om startläge, visa 21
	  		top.toggleClass("transparent");
	  		bottom.toggleClass("transparent");
	  		buttonright.toggleClass("down");
	  	}
	  	else if(top.hasClass("transparent") && middle.hasClass("transparent") && !bottom.hasClass("transparent")) { // Om 74, visa 21
		  	bottom.toggleClass("transparent");
		  	middle.toggleClass("transparent");
		  	buttonleft.toggleClass("down");
		  	buttonright.toggleClass("down");
	  	}
	  	else if(top.hasClass("transparent") && !middle.hasClass("transparent") && bottom.hasClass("transparent")) { // Om 21, visa start
		  	top.toggleClass("transparent");
		  	bottom.toggleClass("transparent");
		  	buttonright.toggleClass("down");
	  	}
   	});
});
$(document).scroll(function() {

	var y = $(this).scrollTop();
    var $nav = $("#fp-nav");
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    if (y > winH ) {
    	$nav.fadeIn();
    } else {
    	$nav.fadeOut();
    }

});