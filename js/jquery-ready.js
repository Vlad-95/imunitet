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


    //Открытие/скрытие городов в шапке
    

    //десктопное меню
    // $('.header__menu .header__menu-drop').click(function () {
    //     $(this).toggleClass('active').next().slideToggle();
    // });

    //Мобильное меню

    // if (window.innerWidth <= 992) {
    //     let desktopMenu = $('.header__menu');
    //     let headerIcons = $('.header__wrap .icons');
    //     let mobileMenuClose = document.createElement('div');
    //     let mobileMenuCloseSvg = $('.header__wrap .form.small .form__close svg');
    //     let mobileMenu = document.createElement('div');
    //     let mobileMenuContent = document.createElement('div');
        
    //     $(mobileMenu).addClass('mobile-menu').appendTo('.header__wrap');
    //     $(mobileMenuContent).addClass('mobile-menu__content').appendTo('.mobile-menu');
    //     $(mobileMenuClose).addClass('mobile-menu__close').appendTo('.mobile-menu__content');
    //     mobileMenuCloseSvg.clone().appendTo('.mobile-menu__close')
    //     desktopMenu.detach().appendTo('.mobile-menu__content');
    //     headerIcons.detach().appendTo('.mobile-menu__content');
        
    // }

    //Открытие/закрытие мобильного меню
    // $('.burger').click(function() {
    //     $('body').addClass('opacity-layer no-scroll');
    //     $('.mobile-menu').show("slide", { direction: "right" }, 500);
    // });

    // $('.mobile-menu__close').click(function() {
    //     $('body').removeClass('opacity-layer');
    //     $('.mobile-menu').hide("slide", { direction: "right" }, 500);
    // })

    
    //одинаковая высота новостей
    // if($('.news').length) {
    //     $('.news .news__item .news__item-content').matchHeight();
    // };

    // if($('.opportunities').length) {
    //     $('.opportunities .opportunities__item .opportunities__item-name').matchHeight();
    // };

    // if($('#map').length) {
    //     ymaps.ready(init);
    //     function init(){
    //         // Создание карты.
    //         var myMap = new ymaps.Map("map", {
    //             center: [59.85120307488966,30.30813975396727],
    //             controls: ['geolocationControl'],                
    //             zoom: 16
    //         });

    //         var myPlacemark = new ymaps.Placemark([59.85120307488966,30.30813975396727], {}, {
    //             iconLayout: 'default#image',
    //             iconImageHref: 'img/icons/map-marker.png',
    //             iconImageSize: [55, 57],
    //             iconImageOffset: [-28, -45]
    //         });

    //         myMap.geoObjects.add(myPlacemark);
    //     }
    // };

    

    //прикрепление файла
    // $('.form__file input').on('change', function(e) {
    //     let filename = $(this)[0].files[0].name;

    //     $(this).siblings('.name').text(filename);
        
    //   })
});
