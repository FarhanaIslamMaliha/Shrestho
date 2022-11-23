$('.bnr-part').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
   
    prevArrow: '<i class="fas fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fas fa-chevron-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
    }

  ]
});