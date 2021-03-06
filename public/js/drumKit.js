'use strict';

//移除playing 屬性
var removeTransition = function removeTransition(e) {
    //省略掉其他 propertyName 不是 transform 的物件
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

var playSound = function playSound(e) {
    //取得案件相對應的音效
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
    //沒有相對應音效時停止
    if (!audio) return;
    //音效檔歸零
    audio.currentTime = 0;
    //音效檔啟用
    audio.play();
    //class 添加 palying
    key.classList.add('playing');
};

window.onload = function () {
    //取的所有class="key" 的div
    var keys = Array.from(document.querySelectorAll('.key'));
    // const keys = document.querySelectorAll('.key');
    //監聽transtionend時執行removeTransition
    keys.forEach(function (key) {
        key.addEventListener('transitionend', removeTransition);
    });
    window.addEventListener('keydown', playSound);
};
//# sourceMappingURL=drumKit.js.map
