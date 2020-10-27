// slide
var slider = tns({
    "container": ".slides",
    "items": 1,
    "rewind": true,
    "autoplay": true,
    "autoplayTimeout": 3000,
    "swipeAngle": false,
    "speed": 400
});

// slide prev,next Btn

let prevBtn = document.querySelector(".tns-controls button:first-child");
prevBtn.innerHTML = "";
prevBtn.innerHTML = "<img src='assets/images/boomerang_left.png' alt='leftBoomerang'>";

let nextBtn = document.querySelector(".tns-controls button:last-child");
nextBtn.innerHTML = "";
nextBtn.innerHTML = "<img src='assets/images/boomerang_right.png' alt='rightBoomerang'>";