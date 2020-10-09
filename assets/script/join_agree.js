// 보완작업 - 전체동의 재 클릭으로 비활성화 시에 동의하지 않음으로 넘어가기

// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
  $(this).children(".subBar").stop().slideToggle(500);
  $(this).toggleClass('mainBarStyle');
  $(this).children(".subBar").toggleClass('subBarStyle');
});

// 전체동의 버튼 활성화

let allChkBtn = document.querySelector("#allCheck");
let chkBtn = document.querySelectorAll(".agree");

allChkBtn.addEventListener("click",function() {
    for (let i=0; i<chkBtn.length; i++) {
      chkBtn[i].checked = allChkBtn;
    }
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
    allChkBtn.checked = false;
  } else {
    allChkBtn.checked = true;
  }
}

// 동의함 버튼 클릭 시 전체동의 활성화
let partnerAgree = document.querySelector("#partnerAgree");
let useAgree = document.querySelector("#useAgree");
let consignmentAgree = document.querySelector("#consignmentAgree");

partnerAgree.addEventListener("click",agreeChk);
useAgree.addEventListener("click",agreeChk);
consignmentAgree.addEventListener("click",agreeChk);


function agreeChk() {
  if (partnerAgree.checked && useAgree.checked && consignmentAgree.checked) {
    allChkBtn.checked = true;
  } else {
    allChkBtn.checked = false;
  }
}
