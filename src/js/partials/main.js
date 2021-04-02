$(document).ready(function(){
    $('.reviews__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.faq__item-heading').click(function(){
        const $this = $(this)
        if(!$this.hasClass('is--active')){
            $('.faq__item-heading').removeClass('is--active')
            $('.faq__item-desc').slideUp(200)
            $this.addClass('is--active')
            $this.siblings('.faq__item-desc').slideDown(200)
        } else{
            $this.removeClass('is--active')
            $this.siblings('.faq__item-desc').slideUp(200)
        }
    })
})