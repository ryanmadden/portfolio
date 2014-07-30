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
	$('li').click(function() {
		$('li').each(function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			};
		})
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
		}
	})

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

     });
})