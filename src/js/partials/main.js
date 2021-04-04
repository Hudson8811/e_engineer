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

    if($('.wrapper').hasClass('card_page')){
            $('.overlay').addClass('is--active')
            $('.footer').addClass('is--active')
            $('body').addClass('is--active')
    }

    if($('.wrapper').hasClass('order_page')){
        $('.overlay').addClass('is--active')
        $('.footer').addClass('is--active')
        $('body').addClass('is--active')
}

    $('.card__slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    })

    $('.order__radio-wrapper .filters__item').click(function (){
        if($(this).children('input').attr('checked', true)){
            $('.order__radio-wrapper .filters__item p').removeClass('is--active')
            $(this).children('p').addClass('is--active')
        }
    })


    $('.header__link').click(function(e){
        e.preventDefault()
        const $this = $(this)
        const id = $this.data('id')
        if(!$this.hasClass('is--active')){
            $('.header__link').removeClass('is--active')
            $this.addClass('is--active')
            $('.menu-item').removeClass('is--active')
            $(`.menu-item[data-id="${id}"]`).addClass('is--active')
            $('body').addClass('is--active')
        } else{
            $this.removeClass('is--active')
            $(`.menu-item[data-id="${id}"]`).removeClass('is--active')
            $('body').removeClass('is--active')
        }
    })
})