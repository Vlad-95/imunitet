$(document).ready(function() {

    if($('.slider').length) {
        $('.slider').slick({
            dots: true,
            arrows: false
        });
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
