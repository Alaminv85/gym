$(".banner_slider").slick({
    dots: false,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
});

$(".team-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
});

$('.venobox').venobox({
    autoplay: true,
    arrows: false,
});

$('.venobox').on('click', '.next', function(e){
        test.VBnext();
    });

$("#colorful-elliptic").colorfulTab({
    theme: "elliptic"
});

$(".testi-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    
});

 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
