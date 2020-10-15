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

// naver Reserve 

let naverReserve = document.querySelector("#addMenu ul li:first-child a");
naverReserve.href = "https://map.naver.com/v5/search/%EC%95%84%EC%9B%83%EB%B0%B1?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14108429.1958773,4509942.3586165,13,0,0,0,dh";

// save point 

let modalPopup = document.querySelector("#modal_savePoint");

let modalOpen = document.querySelector("#addMenu ul li:nth-child(2)");
modalOpen.addEventListener("click",modal_Open);

let modalClose = document.querySelector("#modalClose");
modalClose.addEventListener("click",modal_Close);


function modal_Open() {
    modalPopup.style.display = "block";
}

function modal_Close() {
    modalPopup.style.display = "none";
}

// delivery

let delivery = document.querySelector("#addMenu ul li:last-child a");
delivery.href = "../pager/cart.html";

// sns 주소 연동

let instagram = document.querySelector("#snsIcon a:first-child");
instagram.href = "https://www.instagram.com/outbackkorea/";

let facebook = document.querySelector("#snsIcon a:nth-child(2)");
facebook.href = "https://www.facebook.com/koreaoutback";

let youtube = document.querySelector("#snsIcon a:nth-child(3)");
youtube.href = "https://www.youtube.com/user/outbackkorea";

let kakao = document.querySelector("#snsIcon a:last-child");
kakao.href = "https://pf.kakao.com/_axcnxah";