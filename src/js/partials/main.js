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

    $('.services-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendDots: $('.services-slider__dots'),
        prevArrow: $('.services-slider__prev'),
        nextArrow: $('.services-slider__next'),
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

    $('.market-icon').click(function(e){
        e.preventDefault()
        if(!$(this).hasClass('is--active')){
            $(this).addClass('is--active')
            $('.basket').addClass('is--active')
            $('.overlay').addClass('is--active')
            $('.footer').addClass('is--active')
            $('body').addClass('is--active')
        } else{
            $(this).removeClass('is--active')
            $('.basket').removeClass('is--active')
            $('.overlay').removeClass('is--active')
            $('.footer').removeClass('is--active')
            $('body').removeClass('is--active')
        }
    })
})