//coutdown

var countDownDate = new Date("July 19, 2020 24:00").getTime();

var daysTag = document.getElementById("days");
var hoursTag = document.getElementById("hours");
var minutesTag = document.getElementById("minutes");
var secondsTag = document.getElementById("seconds");

var x = setInterval(function() {

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

// menu
function respMenu() {

    let burger = document.getElementById('btnBurger');
    let close = document.getElementById('btnClose');
    let menuResp = document.getElementById('menu');

    burger.addEventListener('click', function (e) {
        e.preventDefault();
        menuResp.classList.add('nav-open');
    });

    close.addEventListener('click', function (e) {
        e.preventDefault();
        menuResp.classList.remove('nav-open');
    });
}

respMenu();
