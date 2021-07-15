$(document).ready(function(){
    $('.guide-carousel').owlCarousel({
        nav: true,
        // navText: ['<img src="images/left-arrow.png" alt="">', '<img src="images/right-arrow.png" alt="">'],
        smartSpeed: 700,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:1,
                nav: true
            },
            1000:{
                items:1,
                nav: true
            }
        }
    });
    $('.brands-carousel').owlCarousel({
        nav: true,
        smartSpeed: 700,
        responsive:{
            0:{
                items:5,
                nav: false
            },
            600:{
                items:5,
                nav: true
            },
            1000:{
                items:5,
                nav: true
            }
        }
    });
});