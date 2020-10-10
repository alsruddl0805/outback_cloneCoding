// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
  $(this).children(".subBar").stop().slideToggle(500);
  $(this).toggleClass('mainBarStyle');
  $(this).children(".subBar").toggleClass('subBarStyle');
});

// 전체동의 버튼 활성화
let allCheck = document.querySelector("#allCheck");

allCheck.addEventListener("click",function() {
  let allChkVal = allCheck.checked;
  let partnerAgree = document.querySelector("#partnerAgree");
  let useAgree = document.querySelector("#useAgree");
  let consignmentAgree = document.querySelector("#consignmentAgree");

  partnerAgree.checked = allChkVal;
  useAgree.checked = allChkVal;
  consignmentAgree.checked = allChkVal;
});

// 동의하지 않음 체크시 전체동의 비활성화
let partnerDisagree = document.querySelector("#partnerDisagree");
let useDisagree = document.querySelector("#useDisagree");
let consignmentDisagree = document.querySelector("#consignmentDisagree");

partnerDisagree.addEventListener("click",disagreeChk);
useDisagree.addEventListener("click",disagreeChk);
consignmentDisagree.addEventListener("click",disagreeChk);


function disagreeChk() {
  if (partnerDisagree.checked || useDisagree.checked || consignmentDisagree.checked) {
    allCheck.checked = false;
  } else {
    allCheck.checked = true;
  }
}

// 동의함 버튼 클릭 시 전체동의 활성화
partnerAgree.addEventListener("click",agreeChk);
useAgree.addEventListener("click",agreeChk);
consignmentAgree.addEventListener("click",agreeChk);

function agreeChk() {
  if (partnerAgree.checked && useAgree.checked && consignmentAgree.checked) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
}

// 동의버튼 유효성 검사
let confirm = document.querySelector("#confirm");
confirm.addEventListener("click",function(){
  if (partnerAgree.checked == false) {
    alert("아웃백 회원 약관에 대한 동의는 필수 항목입니다.");
    partnerAgree.focus();
  } else if (useAgree.checked == false) {
    alert("개인정보 수집 및 이용에 대한 동의는 필수 항목입니다.");
    useAgree.focus();
  } else if (consignmentAgree.checked == false) {
    alert("개인정보 취급 위탁에 대한 동의는 필수 항목입니다.");
  } else {
    document.querySelector("form").action = "../pager/join_userInfo.html";
    document.querySelector("form").submit();
  }
});