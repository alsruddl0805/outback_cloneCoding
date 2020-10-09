// index 보완
// 1. 슬라이드 prev,next 버튼 구현
// 2. 슬라이드 controls 활성화

// slide

function slide() {
    $("#slideFrame").animate({"margin-left":"-1920px"},1000,
        function(){
            $(this).css({"margin-left":"0"});
            $("#slideFrame>a:first").insertAfter("#slideFrame>a:last");
        }
    );
}

setInterval(slide,3000);


// arrow hover

let leftArrow = document.querySelector("#leftArrow");
let leftRed = document.querySelector("#leftRed");
leftArrow.addEventListener("mouseover",left_Change);
leftArrow.addEventListener("mouseout",left_Origin);

function left_Change() {
    leftArrow.style.display = "none";
    leftRed.style.display = "block";
}

function left_Origin() {
    leftArrow.style.display = "block";
    leftRed.style.display = "none";
}

let rightArrow = document.querySelector("#rightArrow");
let rightRed = document.querySelector("#rightRed");
rightArrow.addEventListener("mouseover",right_Change);
rightArrow.addEventListener("mouseout",right_Origin);

function right_Change() {
    rightArrow.style.display = "none";
    rightRed.style.display = "block";
}

function right_Origin() {
    rightArrow.style.display = "block";
    rightRed.style.display = "none";
}
