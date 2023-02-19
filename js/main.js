/*	Preloader */

// jQuery(window).load(function(){
// 	$("#preloader").fadeOut("slow");
// });

/*  Welcome Section Slider */
$(function() {
    var Page = (function() {
        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {
                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );
                }
            } ),
            init = function() {
                initEvents();               
            },
            initEvents = function() {
                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {
                    slitslider.next();
                    return false;
                } );
                $navArrows.children( ':first' ).on( 'click', function() {     
                    slitslider.previous();
                    return false;
                } );
                $nav.each( function( i ) {               
                    $( this ).on( 'click', function( event ) {
                        var $dot = $( this );                       
                        if( !slitslider.isActive() ) {
                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        }                       
                        slitslider.jump( i + 1 );
                        return false;                    
                    } );                    
                } );
            };
            return { init : init };
    })();
    Page.init();
});

$(document).ready(function(){

/* load case study content */
    $( "#title1" ).load( "cs-vw.html #title1" );
    $( "#content1" ).load( "cs-vw.html #content1" );
    $( "#title2" ).load( "cs-vw.html #title2" );
    $( "#content2" ).load( "cs-vw.html #content2" );
    $( "#title3" ).load( "cs-vw.html #title3" );
    $( "#content3" ).load( "cs-vw.html #content3" );
    $( "#title4" ).load( "cs-vw.html #title4" );
    $( "#content4" ).load( "cs-vw.html #content4" );
    $( "#title5" ).load( "cs-vw.html #title5" );
    $( "#content5" ).load( "cs-vw.html #content5" );
    $( "#title6" ).load( "cs-vw.html #title6" );
    $( "#content6" ).load( "cs-vw.html #content6" );
    $( "#title7" ).load( "cs-vw.html #title7" );
    $( "#content7" ).load( "cs-vw.html #content7" );
    $( "#title8" ).load( "cs-vw.html #title8" );
    $( "#content8" ).load( "cs-vw.html #content8" );
    $( "#title9" ).load( "cs-vw.html #title9" );
    $( "#content9" ).load( "cs-vw.html #content9" );
    $( "#title10" ).load( "cs-vw.html #title10" );
    $( "#content10" ).load( "cs-vw.html #content10" );

/*	Menu item highlighting */
	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});	
    // back to top
    var offset = 900,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function () {
    	($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(window).scrollTop() > 400) {
            // $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            // $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });   
    $back_to_top.on('click', function (event) {
        	event.preventDefault();
        	$('body,html').animate({
           		 scrollTop: 0,
        	}, scroll_top_duration);
    });
/*	Fix Slider Height */	
    // Slider Height
    var slideHeight = $(window).height();  
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fal fa-angle-left fa-lg'></i>","<i class='fal fa-angle-right fa-lg'></i>"]
	});	
/*	Featured Project Lightbox */
	$(".fancybox").fancybox({
		padding: 0,
		openEffect : 'fade',
		openSpeed  : 350,
		closeEffect : 'fade',
		closeSpeed  : 450,
		closeClick : false,	
        beforeShow: function () {
            this.title = '<h3>' + $(this.element).find('figcaption > h3').html() + '</h3>' + '<h4>' + $(this.element).find('figcaption > h4').html() + '</h4>' + '<p>' + $(this.element).find('figcaption > p').html() + '</p>';
            $(".site-content").addClass("blurify");
        },
        afterClose : function () {
            $(".site-content").removeClass("blurify");
        },
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, .6)'

				}
			}
		},
	});	
});

var wow = new WOW ({
	offset:       0,
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();
var sayit = document.getElementById("huth"); 
function playAudio() { 
  sayit.play(); 
} 
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 60;
    if (elementTop < elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("ul#nav li");
window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - (innerHeight / 2);
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id"); }
  });
  navLi.forEach((li) => {
    li.classList.remove("activenav");
    if (li.classList.contains(current)) {
        li.classList.add('activenav');
    }
  });
  
   
};

document.getElementById('current-year').innerHTML = new Date().getFullYear();
