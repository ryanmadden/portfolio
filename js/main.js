var xx = -($(window).scrollTop() / $('div.bgParallax').data('speed')); 
$("#splash").css("background-position", '50% '+ xx + 'px');
$("#splash").css("min-height", $(window).height() );
$("#pic-break").css("min-width", $(window).width() );

$('div.bgParallax').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 

		var bgpos = '50% '+ yPos + 'px';

		$obj.css('background-position', bgpos );
 
	}); 
});


$(document).ready(function() {

  $(window).load(function() {
    $("#cover").fadeOut(2000);
  })

	// $('li').click(function() {
	// 	$('li').each(function() {
	// 		if ($(this).hasClass('active')) {
	// 			$(this).removeClass('active');
	// 		};
	// 	})
	// 	if(!$(this).hasClass('active')) {
	// 		$(this).addClass('active');
	// 	}
	// })

  // $('.navbar-brand').click(function() {
  //   $('li').each(function() {
  //     if ($(this).hasClass('active')) {
  //       $(this).removeClass('active');
  //     };
  //   })
  // })

	var $starter = $(window).height()-(50);
    $(window).scroll(function() {

     if ($('#fullScreen').length)
     {

    
        if ($(window).scrollTop()>= $starter){
           $('#mainHeader').slideDown();
       } else if ($(window).scrollTop()==0){
           $('#mainHeader').slideUp(1000);
       }
   	}

  	}) 
  		$("#arrow").hover(function() {
  			$(this).stop();
  	        $(this).animate({color: "#C0C0C0"}, 'fast');
	    }, function() {
	    	$(this).stop();
	        $(this).animate({color: "white"}, 'fast');

	    });

	$('#arrow').click(function() {
    $('#about-li').addClass('active');
	})
  $('#arrow').click(function() {
    $('#about-li').addClass('active');
  })
	  // scroll handler
  var scrollToDiv = function( id ) {
    // grab the element to scroll to based on the name
    var elem = $("div[id='"+ id +"']");
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
      // do the scroll
      $('html,body').stop();
      $('html, body').animate({
              scrollTop: elem.offset().top-70
      }, 1000 );
    }
  };
  // bind to click event
  $("a").click(function( event ) {
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") ) {
      // cancel default event propagation
      event.preventDefault();
      // scroll to the location
      var href = $(this).attr('href').replace('#', '')
      scrollToDiv( href );
    }
  });

  $('#resume').click(function() {
    var win = window.open("./public/Madden_Ryan.pdf", '_blank');
    win.focus();
  });
})
