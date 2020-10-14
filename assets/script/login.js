// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
});

// 공백검사

let uID = document.querySelector("#uID");
let uPW= document.querySelector("#uPW");
let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click",login);

function login() {

      if (uID.value.trim() == "") {
          alert("아이디를 입력하세요.");
          uID.focus();
      } else if (uPW.value.trim() == "") {
          alert("비밀번호를 입력하세요.");
          uPW.focus();
      } else {
          alert("로그인이 완료되었습니다.");
          document.querySelector("form").action = "../index.html";
          document.querySelector("form").submit();
      }
  }
