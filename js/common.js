//mobile-menu
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});

//slow anchor links 
$(document).ready(function(){
    var headerHeight = $('header').outerHeight();

    $('.slideSection').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});

//popup-form
$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});

//popup-gallery
 $('.popup-gallery').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });

//slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel( {
  	items: 4,
  	loop: true,
  	dots: false,
  	nav: true,
  	navText : ["",""],
  	responsive:{
  		1280 : {
  			items: 3
  		},
  		992 : {
  			items: 3
  		},

  		768 : {
  			items: 3
  		},
  		480 : {
  			items: 1
  		},
  		425 : {
  			items: 1
  		},
  		375 : {
  			items: 1
  		},
  		320 : {
  			items: 1
  		}
  	}
  });
});

//slogan
function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('.slogan').html(messages[i]).fadeIn(500).delay(3000).fadeOut(500, function() {
        nextMsg(i + 1);
    });
};

var messages = [
    '<img src="img/main-title.png" alt="">',
    '<img src="img/main-slogan.png" alt="">'
    ];

$('.slogan').hide();

nextMsg(0);
