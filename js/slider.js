if($('.slider__body').length>0){
    $('.slider__body').slick({
        // autoplay: true,
        // Infinity: false,
        dots: true,
        arrows: false,
        acceseibility:false,
        sliderToShow:1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow:'<button type ="button" class="slick-next"></button>',
        prevtArrow:'<button type ="button" class="slick-prev"></button>',
        Responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}