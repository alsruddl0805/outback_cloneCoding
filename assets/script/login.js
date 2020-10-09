// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
});

// 공백검사

var uID = document.querySelector("#uID");
var uPW= document.querySelector("#uPW");
var loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click",login);

function login() {

      if (uID.value.trim() == "") {
          alert("아이디를 입력하세요.");
          uID.focus();
      } else if (uPW.value.trim() == "") {
          alert("비밀번호를 입력하세요.");
          uPW.focus();
      } else {
          alert("존재하지 않는 아이디입니다.");
      }
  }
