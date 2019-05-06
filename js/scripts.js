$(document).ready(function () {
    $(window).scroll(function () {
        scrolled_menu();
    });
    
    function scrolled_menu(){
        if ($(window).scrollTop() >= 300) {
            $(".fixed-menu").addClass("showed");
            $('.alerts').addClass('scrolled-alerts');
        }
        else{
            $(".fixed-menu").removeClass("showed");
            $('.alerts').removeClass('scrolled-alerts');
        }
        if($(window).scrollTop() >= $('.all-content .head-menu').height()){
            $('.alerts').addClass('add-fixed');
        }
        else{
             $('.alerts').removeClass('add-fixed');
        }
      
    }

    // init select 2
    if(document.querySelector('.custom-select')) {
        $('.custom-select').select2({
          width: '100%',
          theme: "bootstrap",
          allowClear: true,
          placeholder: 'Выберите страну',
          'containerCssClass': 'catalog-select',
          'dropdownCssClass': 'catalog-select__dropdown',
        });
    }
    if(document.querySelector('.index-select')) {
        $('.index-select').select2({
            width: '100%',
            containerCssClass: 'index-select__wrap',
            dropdownCssClass: 'index-select__dropdown',
        });
    }

    $('.custom-select').on('select2:open', function() {
        $('.select2-search--dropdown .select2-search__field').attr('placeholder', 'Начните вводить название страны');
    });
    
    
    
    //инициализация слайдеров картинок товара
    $('.slider-top-init').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-bott-init'
    });
    $('.slider-bott-init').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-top-init',
        dots: false,
        arrows:true,
        infinite:false,
        focusOnSelect: true
    });
    
    
    
    $('.other-products .one-block,.shadow-wr,.shadow-wr-l').click(function() {
        location.href = $(this).find('a').attr('href');
    });



    // слайдер клиентов

    if ($(window).width() < 992) {
        $('.index-products-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-prev.svg" alt="" class="img-responsive"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-next.svg" alt="" class="img-responsive"></button>',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '66px',
                        slidesToShow: 1,
                        dots: true
                    }
                },
            ]
        });

        $('.how-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-prev.svg" alt="" class="img-responsive"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-next.svg" alt="" class="img-responsive"></button>',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '29px',
                        slidesToShow: 1,
                        dots: true
                    }
                },
            ]
        });

        $('.top-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-prev.svg" alt="" class="img-responsive"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-next.svg" alt="" class="img-responsive"></button>',

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '29px',
                        slidesToShow: 2,
                        dots: false
                    }
                },
            ]
        });

        $('.clients-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-arrow-prev.svg" alt="" class="img-responsive"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/slider-arrow-next.svg" alt="" class="img-responsive"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: '71px',
                        slidesToShow: 1
                    }
                },
            ]
        });
    }

    if ($(window).width() < 768) {
        $('.how1-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            dotsClass: 'slick-dots dots-num',
            arrows: false,
            centerMode: true,
            centerPadding: '59.5px'
        });
    }
    
    
    
    
    
    
    
    //клик закрывающий выбор региона
    
    $('.close-region').click(function(){
        $('.regions').slideUp(150);
    });
    
    //клик откры/закр дропдауна регионов
    $('.picked-country').click(function(){
        if(!$(this).parents('.form-pick-region').hasClass('opened')){
            $(this).parents('.form-pick-region').addClass('opened')
        }
        else{
            $(this).parents('.form-pick-region').removeClass('opened')
        }
        
    });
    
    
    //закрыть куки
    $('.close-cookie').click(function(){
        $('.cookies-wrapp').css({
            'display':'none'
        });
        $('.cookies').hide();
    });


    $('.clicking-item').click(function() {
        location.href = $(this).find('a').attr('href');
    });


    $('#open_languages').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#notifications').slideUp();
        $('#profile').slideUp();
        $('.page-header__arrow').removeClass('page-header__arrow--reverse');
        $('#languages_list').slideToggle();
    });
    $('#open_notifications').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#languages_list').slideUp();
        $('#profile').slideUp();
        $('.page-header__arrow').removeClass('page-header__arrow--reverse');
        $('#notifications').slideToggle();
    });
    $('#open_profile').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#languages_list').slideUp();
        $('#notifications').slideUp();
        $('#profile').slideToggle();
        $('.page-header__arrow').toggleClass('page-header__arrow--reverse');
    });

    $('body').click(function() {
        $('#languages_list').slideUp();
        $('#notifications').slideUp();
        $('#profile').slideUp();
        $('.page-header__arrow').removeClass('page-header__arrow--reverse');

        if ($(window).width() < 768) {
            $('.mobile-menu-list').slideUp();
            $('.open-mobile-menu').removeClass('mobile-menu--opened');
        }
    });


    // mobile menu

    $('.open-mobile-menu').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('mobile-menu--opened');
        $('.mobile-menu-list').slideToggle();
    });

    $('.open_region').click(function (e) {
        e.preventDefault();
        $(this).find('.geo-block__arrow').toggleClass('geo-block__arrow--up');
        $(this).next().slideToggle();
    });


    // modals

    $('.phone').inputmask({
        mask: "+7 (999) 999-99-99",
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true
    });

    $('.index-checkbox__text').click(function () {
        $(this).parents('.index-checkbox').find('input').click();
    });

    //$('#step1').modal('show');
    //$('#step2').modal('show');
    //$('#thank_you').modal('show');
    
});
