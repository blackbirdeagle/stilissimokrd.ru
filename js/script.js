var flag = 0;
$('.mobile__menu__show__pl').click(function(){
	if(flag == 0){
		$('.header__menu').fadeIn(200);
		flag = 1;
	}else if(flag == 1){
		$('.header__menu').fadeOut(200);
		flag = 0;
	}
});

$('.mobile__menu__show').click(function(){
	$('.header__menu').fadeIn(200);
});

$('.close__menu').click(function(){
	$('.header__menu').fadeOut(200);
});

$("#scroll_top").click(function(){
	$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
});

$('.catalog__sort p a').click(function(){
	if($('.catalog__sort ul').is(':visible')){
		$('.catalog__sort ul').fadeOut(100);
	}else{
		$('.catalog__sort ul').fadeIn(100);
	}
});

$('.cat_btn').click(function(){
	$('.catalog__menu').animate({left: 0}, 300);
});

$('.catalog__menu__close').click(function(){
	$('.catalog__menu').animate({left: -100+'%'}, 300);
});

$(document).ready(function() {
    $("#slider__novinki, #slider__novinki1").owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:2
			},
			991:{
				items:2
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
		
    });
	
    $("#slider__novinki2").owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:2
			},
			991:{
				items:3
			}		
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
		
    });	
	
    $("#slider__fabrik").owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:2
			},
			991:{
				items:3
			}		
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
		
    });		
	
    $("#skidki__slider").owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:2
			},
			991:{
				items:2
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>']
    });	
	
	$('#preview__slider').owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:2
			},
			360:{
				items:2
			},			
			570:{
				items:4
			},			
			600:{
				items:4
			},
			991:{
				items:4
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>']
    });	
	
	$('#preview__slider2').owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:2
			},
			360:{
				items:2
			},			
			570:{
				items:4
			},			
			600:{
				items:4
			},
			991:{
				items:4
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>']
    });	
	
	$('#index__slider').owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			360:{
				items:1
			},			
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: true,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>']
    });	

	$('#slider__reviews').owlCarousel({
        //items : 6,
        responsive:{ 
			0:{
				items:1
			},
			360:{
				items:1
			},			
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}
		},
		margin: 30,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: true,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>']
    });		
});