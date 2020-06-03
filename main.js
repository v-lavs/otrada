$(document).ready(function () {
    $('.grid').masonry({
        itemSelector: '.grid__item',
    });

    $('.answers-list__item').on('click', function () {
        $(this).toggleClass('selected-answer');
    });

    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            $(".header").css({"background": "rgba(0, 85, 137, .6)", "padding-top": "20px"})
        }
        if (100 > scrolled) {
            $(".header").css({"background": "transparent", "padding-top": "50px"})
        }
    }


});

//coutdown
window.onload = function () {
    var countDownDate = new Date(2020, 7, 19, 24, 0).getTime();

    var daysTag = document.getElementById("days");
    var hoursTag = document.getElementById("hours");
    var minutesTag = document.getElementById("minutes");

    var x = setInterval(function () {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        daysTag.innerHTML = days;
        hoursTag.innerHTML = hours;
        minutesTag.innerHTML = minutes;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
};