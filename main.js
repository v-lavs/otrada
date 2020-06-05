$(document).ready(function () {
    $('#btnBurger').click(function (e) {
        e.preventDefault();
        $('.nav-list').animate({width: 'toggle', height: 'toggle'}, 500);
        $('.header__nav').toggleClass('header__nav_open');
        $('.header').toggleClass('header_backdrop');
    });

    function prepareMobNav() {
        var windowW = $(window).width();
        if (windowW <= 980) {
            if($('.header__nav').hasClass('header__nav_open')) {
                $('#btnBurger').click();
            }
        } else {
            if(!$('.header__nav').hasClass('header__nav_open')) {
                $('#btnBurger').click();
            }
        }
    }

    $(window).on('resize', function () {
        prepareMobNav();
    });

    prepareMobNav();
    $('.grid').masonry({
        itemSelector: '.grid__item',
    });

    $('.answers-list__item').on('click', function () {
        $(this).toggleClass('selected-answer');
    });

    var scrolled;

    function onHeaderScrol() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 50) {
            $(".header").addClass('header_active');
        } else {
            $(".header").removeClass('header_active');
        }
    }

    $(document).on('scroll', function () {
        onHeaderScrol()
    });

    onHeaderScrol();


    $('.go-to-next').click(function (e) {
        e.preventDefault();
        var id = $(e.target).attr('href');
        $('.content-quiz').addClass('hidden');
        $(id).removeClass('hidden');
    })
});



