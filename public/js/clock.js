'use strict';

window.onload = function (e) {
    setInterval(setDate, 1000);
    setDate();
};

var setDate = function setDate() {
    var hours = document.querySelector('.house-hand');
    var mins = document.querySelector('.min-hand');
    var secs = document.querySelector('.second-hand');

    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // ((hour / 12) * 360) + ((mins/60)*30) + 90; (hour / 60) * 360 + 90
    // ((mins / 60) * 360) + ((seconds/60)*6) + 90; (minute / 60) * 360 + 90
    // ((seconds / 60) * 360) + 90 ;(second / 60) * 360 + 90
    var hourDeg = hour / 12 * 360 + 90;
    var minuteDeg = minute / 60 * 360 + 90;
    var secondDeg = second / 60 * 360 + 90;
    // hours.style.transform = `rotate(420deg) scale(0.5, 2)`;

    hours.style.transform = 'rotate(' + hourDeg + 'deg) scale(0.5, 2)';
    mins.style.transform = 'rotate(' + minuteDeg + 'deg) scale(0.6, 1)';
    secs.style.transform = 'rotate(' + secondDeg + 'deg) scale(0.8, 0.5)';
};
//# sourceMappingURL=clock.js.map
