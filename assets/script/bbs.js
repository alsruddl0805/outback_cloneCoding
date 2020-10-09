
// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

// pager hover style

let pageBtn = document.querySelectorAll("#pageBtn li a");

for (let i=0; i<pageBtn.length; i++) {
  pageBtn[i].addEventListener("focusin",function(){
    this.classList.add("pager");
  });
}

for (let i=0; i<pageBtn.length; i++) {
  pageBtn[i].addEventListener("focusout",function(){
    this.classList.remove("pager");
  });
}

// 공지사항 리스트 번호 자동출력

let listNum = document.querySelectorAll(".listNum");
let start = 44;

for (let i = 0; i<listNum.length; i++) {
  let numTxt = start - i;
  listNum[i].innerText = numTxt;
}
