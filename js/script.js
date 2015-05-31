$(document).ready(function() {


	$('.interactive__tabs-texts p').hide();
	$('.interactive__tab-text__text-1').show();
	$('#tab-1').removeClass('interactive__tab-btn').addClass('interactive__tab-btn__active');
	$('#slid-1').removeClass('interactive__slider-btn').addClass('interactive__slider-btn__active');

	$('#tab-1').click(function() {
		$(this).removeClass('interactive__tab-btn').addClass('interactive__tab-btn__active');
		$('#tab-2').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-3').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-4').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('.interactive__tabs-texts p').hide();
		$('.interactive__tab-text__text-1').show();
	})
	
	$('#tab-2').click(function() {
		$(this).removeClass('interactive__tab-btn').addClass('interactive__tab-btn__active');
		$('#tab-1').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-3').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-4').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('.interactive__tabs-texts p').hide();
		$('.interactive__tab-text__text-2').show();
	})
	
	$('#tab-3').click(function() {
		$(this).removeClass('interactive__tab-btn').addClass('interactive__tab-btn__active');
		$('#tab-1').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-2').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-4').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('.interactive__tabs-texts p').hide();
		$('.interactive__tab-text__text-3').show();
	})
	
	$('#tab-4').click(function() {
		$(this).removeClass('interactive__tab-btn').addClass('interactive__tab-btn__active');
		$('#tab-1').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-2').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('#tab-3').removeClass('interactive__tab-btn__active').addClass('interactive__tab-btn');
		$('.interactive__tabs-texts p').hide();
		$('.interactive__tab-text__text-4').show();
	})


	var w = $('.interactive__slid').width();	

	$('.interactive__slider-right').click(function slid(event) {
		var l = $('.interactive__slids-list').position().left;
			if(l > -w*2) {
			$('.interactive__slids-list').animate({left: l-w});
		}	
	})

	$('.interactive__slider-left').click(function slid(event) {
		var l = $('.interactive__slids-list').position().left;
			if(l < 0) {
			$('.interactive__slids-list').animate({left: l+w});
		}	
	})

	$('#slid-1').click(function() {
		$(this).removeClass('interactive__slider-btn').addClass('interactive__slider-btn__active');
		$('#slid-2').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('#slid-3').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('.interactive__slids-list').animate({left: 0});
	})

	$('#slid-2').click(function() {
		$(this).removeClass('interactive__slider-btn').addClass('interactive__slider-btn__active');
		$('#slid-1').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('#slid-3').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('.interactive__slids-list').animate({left: -w});
	})

	$('#slid-3').click(function() {
		$(this).removeClass('interactive__slider-btn').addClass('interactive__slider-btn__active');
		$('#slid-1').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('#slid-2').removeClass('interactive__slider-btn__active').addClass('interactive__slider-btn');
		$('.interactive__slids-list').animate({left: -w*2});
	})


	$('#circle1').click(function() {
		$(this).css({'background' : '#fc6e51'})
	})

	$('#circle2').click(function() {
		$(this).css({'background' : '#fc6e51'})
	})

	$('#circle3').click(function() {
		$(this).css({'background' : '#fc6e51'})
	})

	 $( "#runner" ).slider({
      	range: true,
      	min: 0,
      	max: 15000,
      	values: [ 1200, 9500 ],
      	slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + "Р" + "  " + ui.values[ 1 ] + "Р " );
      }
    });
    $( "#amount" ).val($( "#runner" ).slider( "values", 0 ) + "Р" +
      "  " + $( "#runner" ).slider( "values", 1 ) + "Р" );


      $(function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "100%" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 0 );
  });

      $('.advanced-forms__unselected2').click(function() {
      	$('#field-red1').css({'display' : 'none'});
      	$('#field-red2').css({'display' : 'block'});
      })
      $('.advanced-forms__unselected1').click(function() {
      	$('#field-red2').css({'display' : 'none'});
      	$('#field-red1').css({'display' : 'block'});
      })

      $('.messages-list__item__work').hover(function() {
      	$('.messages-list__list-work').slideToggle();
      })


      $('#swich').click(function() {
      	if($(this).text() == 'Включено') {
      		$(this).text('Выключено');
      	}
      	else {
      		$(this).text('Включено');
      	}
      })

	
});