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
      } else if (uID.value.trim() == "123" && uPW.value.trim() == "12345") {
          alert("관리자로 로그인 되었습니다.");
          document.querySelector("form").action = "../pager/manager_select.html";
          document.querySelector("form").submit();
      }  else {
          alert("로그인이 완료되었습니다.");
          document.querySelector("form").action = "../index.html";
          document.querySelector("form").submit();
      }
  }

// 관리자 페이지 이동 버튼

let manageBtn = document.querySelector("#moveManager");
manageBtn.addEventListener("click",moveManager);

function moveManager() {
    if (uID.value.trim() == "") {
        alert("관리자 ID : 123 \n관리자 PW : 12345");
        uID.focus();
    } else if (uPW.value.trim() == "") {
        alert("관리자 ID : 123 \n관리자 PW : 12345");
        uPW.focus();
    } else if (uID.value.trim() == "123" && uPW.value.trim() == "12345") {
        alert("관리자로 로그인 되었습니다.");
        document.querySelector("form").action = "../pager/manager_select.html";
        document.querySelector("form").submit();
    } else {
        alert("관리자 ID,PW를 확인해주세요.");
    }     
}
