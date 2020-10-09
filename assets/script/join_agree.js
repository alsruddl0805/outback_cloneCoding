// join_agree 보완작업
// 1. 동의->미동의 버튼 이동시 전체동의 버튼 해제되지 않음
// 2. 원래 체크되어있던 미동의 버튼이 전체동의 클릭시에도 남아있음
// 3. 동의함 유효성 검사

// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
  $(this).children(".subBar").stop().slideToggle(500);
  $(this).toggleClass('mainBarStyle');
  $(this).children(".subBar").toggleClass('subBarStyle');
});

// 전체동의 활성화

let allCheckBtn = document.querySelector("#allCheck");
allCheckBtn.addEventListener("click",AllChk);
let allCheck = allCheckBtn.checked;

function AllChk() {
    allCheck = document.getElementById("allCheck").checked;
}

let selectAll = document.querySelector(".selectAllMembers");
selectAll.addEventListener('click', function(){
    let objs = document.querySelectorAll(".agreement");
      for (let i = 0; i < objs.length; i++) {
          objs[i].checked = selectAll.checked;
      };
  }, false);

let objs = document.querySelectorAll(".agreement");
for(let i=0; i<objs.length ; i++){
  objs[i].addEventListener('click', function(){
    let selectAll = document.querySelector(".selectAllMembers");
    for (let j = 0; j < objs.length; j++) {
      if (objs[j].checked === false) {
        selectAll.checked = false;
        return;
      };
    };
    selectAll.checked = true;
}, false);
}

// 동의&미동의

let partner_agree = document.querySelectorAll(".partner_agree");
let use_agree = document.querySelectorAll(".use_agree");
let consignment_agree = document.querySelectorAll(".consignment_agree");

for (let i = 0; i<partner_agree.length; i++){
  partner_agree[i].addEventListener("change",partner_Check);
};

function partner_Check(event) {
  if (this.id == 1) {
    partner_agree[1].checked = false;
  } else {
    partner_agree[0].checked = false;
  }
}

for (let i = 0; i<use_agree.length; i++){
  use_agree[i].addEventListener("change",use_Check);
};

function use_Check(event) {
  if (this.id == 2) {
    use_agree[1].checked = false;
  } else {
    use_agree[0].checked = false;
  }
}

for (let i = 0; i<consignment_agree.length; i++){
  consignment_agree[i].addEventListener("change",consignment_Check);
};

function consignment_Check(event) {
  if (this.id == 3) {
    consignment_agree[1].checked = false;
  } else {
    consignment_agree[0].checked = false;
  }
}

// 유효성 검사

// let joinBtn = document.querySelector("#confirm");
// joinBtn.addEventListener("clicik",joinConfirm);

// function joinConfirm() {
//   let partnerAgree = document.querySelector("#partnerAgree");
//   let useAgree = document.querySelector("#useAgree");
//   let consignmentAgree = document.querySelector("#consignmentAgree");

//     if (partnerAgree.checked == false || useAgree.checked == false || consignmentAgree.checked == false) {
//       alert("아웃백 회원 약관에 대한 동의는 필수 항목입니다.");
//     }
// }

