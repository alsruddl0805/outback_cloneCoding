// GNB subMenu

$("ul#mainMenu>li").mouseover(function(){
    $(this).children("ul.subMenu").stop().fadeIn(500);
    $(this).addClass("active");
});

$("ul#mainMenu>li").mouseout(function(){
    $(this).children("ul.subMenu").stop().fadeOut(500);
    $(this).removeClass("active");
});

// top Btn

let topBtn = document.querySelector("#topBtn");
let delay = 500;
topBtn.addEventListener("click",goTop);

function goTop() {
    $('html, body').stop().animate({scrollTop: 0}, delay);
}
