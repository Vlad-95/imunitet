$(document).ready(function() {

    if($('.slider').length) {
        $('.slider').slick({
            dots: true,
            arrows: false
        });
    }

    
    if ($('.services-list').length) {
        //одинаковая высота названий услуг
        $('.services-list .services-list__item-name').matchHeight();

        //счетчик количества услуг
        $('.services-list .services-list__item').each(function() {
            let count = $(this).index() + 1;

            if(count < 10) {
                $(this).find('.services-list__item-count').text("0" + count)
            } else {
                $(this).find('.services-list__item-count').text(count)
            }
            
        })
    }

    //десктопное меню
    $('.header__menu .header__menu-drop').click(function () {
        $('.header__menu .header__menu-drop').not($(this)).removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideToggle();
    });

    $('body').click(function(e) {
        let target = e.target;
        
        if ($(target).hasClass('opacity-layer') && $('.mobile-menu').css('display') == 'block') {
            $('body').removeClass('opacity-layer');
            $('.mobile-menu').hide("slide", { direction: "right" }, 500);
        }
       
        
        
    })

    //Мобильное меню
    if (window.innerWidth <= 992) {
        let desktopMenu = $('.header__menu');
        let headerCity = $('.header__wrap .city');
        let mobileMenuClose = document.createElement('div');
        let mobileMenu = document.createElement('div');
        let mobileMenuContent = document.createElement('div');
        
        $(mobileMenu).addClass('mobile-menu').appendTo('.header__wrap');
        $(mobileMenuContent).addClass('mobile-menu__content').appendTo('.mobile-menu');
        $(mobileMenuClose).addClass('mobile-menu__close').appendTo('.mobile-menu__content');
        desktopMenu.detach().appendTo('.mobile-menu__content');
        headerCity.detach().appendTo('.mobile-menu__content');
        
    }

    //Открытие/закрытие мобильного меню
    $('.burger').click(function() {
        $('body').addClass('opacity-layer no-scroll');
        $('.mobile-menu').show("slide", { direction: "right" }, 500);
    });

    $('.mobile-menu__close').click(function() {
        $('body').removeClass('opacity-layer no-scroll');
        $('.mobile-menu').hide("slide", { direction: "right" }, 500);
    })
    
    //карта на странице О нас
    if($('.about-page').length) {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("about-map", {
                center: [59.971668064132984,30.490338999999977],
                controls: [],                
                zoom: 4
            });

            var myPlacemark = new ymaps.Placemark([59.971668064132984,30.490338999999977], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/pin.png',
                iconImageSize: [55, 32],
                iconImageOffset: [-28, -16]
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }

    if ($('.contacts-page').length) {
        //переключение карт
        $('.map-toggle').on('click', 'div:not(.current)', function() {
            console.log($(this))
            $(this).addClass('current').siblings().removeClass('current');
            $('.contacts__item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        })

        ymaps.ready(init);
        function init(){
            // Создание карты.
            var spb = new ymaps.Map("spb", {
                center: [59.962908564141586,30.353183999999914],
                controls: [],                
                zoom: 17
            });

            // Создание карты.
            var mos = new ymaps.Map("mos", {
                center: [55.752612846663226,37.62316081793495],
                controls: [],                
                zoom: 17
            });

            var spbPlacemark = new ymaps.Placemark([59.962908564141586,30.353183999999914], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/pin.png',
                iconImageSize: [55, 32],
                iconImageOffset: [-28, -16]
            });
            var mosPlacemark = new ymaps.Placemark([55.752612846663226,37.62316081793495], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/pin.png',
                iconImageSize: [55, 32],
                iconImageOffset: [-28, -16]
            });

            spb.geoObjects.add(spbPlacemark);
            spb.behaviors.disable('scrollZoom');
            mos.geoObjects.add(mosPlacemark);
            mos.behaviors.disable('scrollZoom');
        }
    }

    //одинаковая высота названий новостей
    if($('.articles-page').length) {
        $('.articles-list__item .articles-list__name').matchHeight();
    }

    //маска телефона
    if($('.form').length) {
        $('input[name="phone"]').mask('+7(999)999-99-99')
    }
    
});
