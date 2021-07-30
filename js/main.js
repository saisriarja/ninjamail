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
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
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
    $('.contact-form').submit(function() {
        // alert('hi');
        $flag = true;
        $(this).find('.required').each(function() {
            if ($(this).val() == "") {
                $flag = false;
                $(this).addClass('blank').siblings('.spn').children('small').html($(this).attr("name") + "  is requred.").css('font-size', '15px');
            } else {
                $(this).removeClass('blank').siblings('.spn').children('small').html('');
            }
        });
        return $flag;
    });
    $('.hid').hide();
    $('.click').click(function(){
        $('.hid').toggle();
    });
    $('.hid-2').hide();
    $('.click-2').click(function(){
        $('.hid-2').toggle();
    });
    $('.hid-3').hide();
    $('.click-3').click(function(){
        $('.hid-3').toggle();
    });
    $('.hid-4').hide();
    $('.click-4').click(function(){
        $('.hid-4').toggle();
    });
    $('.hid-5').hide();
    $('.click-5').click(function(){
        $('.hid-5').toggle();
    });
    $('.hid-6').hide();
    $('.click-6').click(function(){
        $('.hid-6').toggle();
    });
});