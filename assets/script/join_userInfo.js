// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

// email select 

let Email = document.querySelector("#select_email");
Email.addEventListener("change",function(){
  let emailVal = Email;
  document.querySelector("#emailAddress") = emailVal;
      if (emailVal == "") {
          document.querySelector("#emailAddress").readOnly = false;
          document.querySelector("#emailAddress").focus();
      } else {
          document.querySelector("#emailAddress").readOnly = true;     
      }
});

// birth select

let Year= document.querySelector("#select_year"); 
let Month= document.querySelector("#select_month");
Year.addEventListener("change",lastday);
Month.addEventListener("change",lastday);

let start_year="1998";
let today= new Date(); 
let today_year= today.getFullYear(); 
let index=0; 

for (let y=start_year; y<=today_year; y++) { //start_year ~ 현재 년도 
    document.querySelector("#select_year").options[index] = new Option(y, y); 
    index++; 
  } 

index=0; 

for (let m=1; m<=12; m++) { 
    document.querySelector("#select_month").options[index] = new Option(m, m); index++; 
} 

lastday();

function lastday(){ //년과 월에 따라 마지막 일 구하기 
    let yearVal= Year;
    let monthVal= Month;
    let day=new Date(new Date(yearVal,monthVal,1)-86400000).getDate(); 
    let dayindex_len=document.querySelector("#select_day").length;
    if (day>dayindex_len) {
        for(let i=(dayindex_len+1); i<=day; i++){ 
          document.querySelector("#select_day").options[i-1] = new Option(i, i); 
        } 
    } else if (day<dayindex_len) { 
        for (let i=dayindex_len; i>=day; i--) { 
          document.querySelector("#select_day").options[i]=null; 
        }
    } 
}

// 모바일 카드 랜덤번호 추출하기

let res_01 = document.querySelector("#res_01");
let res_02 = document.querySelector("#res_02");
let res_03 = document.querySelector("#res_03");
let res_04 = document.querySelector("#res_04");

let mobileCardBtn = document.querySelector("#mobileCardBtn");
mobileCardBtn.addEventListener("click",function(){
  let min = 1111;
  let max = 9999;

  let ranNum_01 = Math.floor(Math.random()*(max-min+1))+min;
  let ranNum_02 = Math.floor(Math.random()*(max-min+1))+min;
  let ranNum_03 = Math.floor(Math.random()*(max-min+1))+min;
  let ranNum_04 = Math.floor(Math.random()*(max-min+1))+min;

  res_01 = ranNum_01;
  res_02 = ranNum_02;
  res_03 = ranNum_03;
  res_04 = ranNum_04;
});

let mobileCardUpdate = document.querySelector("#mobileCardUpdate");
mobileCardUpdate.addEventListener("click",function(){
    if (res_01 == "" || res_02 == "" || res_03 == "" || res_04 == "") {
      alert("카드번호를 정확하게 입력해주세요.");
    } else {
      alert("카드 등록이 완료되었습니다.")
    }
});