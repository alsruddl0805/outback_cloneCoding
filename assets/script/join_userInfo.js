// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

  // email option 추가

  let email = ["직접입력","outback.co.kr","empal.com","naver.com","gmail.com","hanmail.net","hanmir.com","hitel.net",
  "hotmail.com","korea.com","lycos.co.kr","nate.com"];
  let addEmailOption = "";
  
  for (let i = 0; i<email.length; i++) {
      addEmailOption += "<option>" + email[i] + "</option>";
  }
  
  let select_Email = document.querySelector("#select_email");
  select_Email.innerHTML = addEmailOption;

// email select 

let Email = document.querySelector("#select_email");
Email.addEventListener("change",function(){
  let emailVal = Email.value;
  document.querySelector("#emailAddress").value = emailVal;
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

for (let y=start_year; y<=today_year; y++) {
    document.querySelector("#select_year").options[index] = new Option(y, y); 
    index++; 
  } 

index=0;

for (let m=1; m<=12; m++) { 
    document.querySelector("#select_month").options[index] = new Option(m, m); index++; 
} 

lastday();

function lastday(){ //년과 월에 따라 마지막 일 구하기 
    let yearVal= Year.value;
    let monthVal= Month.value;
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

  res_01.value = ranNum_01;
  res_02.value = ranNum_02;
  res_03.value = ranNum_03;
  res_04.value = ranNum_04;
});

let mobileCardUpdate = document.querySelector("#mobileCardUpdate");
mobileCardUpdate.addEventListener("click",function(){
    if (res_01.value == "" || res_02.value == "" || res_03.value == "" || res_04.value == "") {
      alert("카드번호를 정확하게 입력해주세요.");
    } else {
      alert("카드 등록이 완료되었습니다.")
    }
});

// 유효성 검사

// ID 중복확인

let uID = document.querySelector("#uID");
let uIDChkBtn = document.querySelector("#IdChk");
let idConfirm = false;

uIDChkBtn.addEventListener("click",function(){
  if (uID.value.trim() == "") {
    alert("아이디를 입력해주세요.");
    uID.focus();
  } else {
    idConfirm = true;
    alert("사용가능한 아이디입니다.");
  }
});

// email 중복확인

let emailID = document.querySelector("#emailID");
let emailAddress = document.querySelector("#emailAddress");
let uEmailChkBtn = document.querySelector("#emailChk");
let emailConfirm = false;

uEmailChkBtn.addEventListener("click",function(){
  if (emailID.value.trim() == "") {
    alert("이메일을 입력해주세요.");
    emailID.focus();
  } else if (emailAddress.value.trim() == "") {
    alert("이메일 주소를 선택해주세요.");
    emailAddress.focus();
  } else {
    emailConfirm = true;
    alert("사용가능한 이메일입니다.");
  }
});

// 회원가입 확인 버튼

let joinBtn = document.querySelector("#joinBtn");
joinBtn.addEventListener("click",function(){
  
  let uName = document.querySelector("#uName");
  let uID = document.querySelector("#uID");
  let uPW = document.querySelector("#uPW");
  let uPWRe = document.querySelector("#uPWRe");
  let uNum_01 = document.querySelector("#uNum_01");
  let uNum_02 = document.querySelector("#uNum_02");
  let uNum_03 = document.querySelector("#uNum_03");
  let emailID = document.querySelector("#emailID");
  let emailAddress = document.querySelector("#emailAddress");
  let pointPW = document.querySelector("#pointPW");
  let pointPWRe = document.querySelector("#pointPWRe");

  // 이름, 아이디, 비밀번호 유효성 검사

  let NameExp = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let NameExpRes = NameExp.test(uName.value);

  let IDExp = /[^a-z|A-Z|0-9|]/;
  let IDExpRes = IDExp.test(uID.value);

  let PWExp = /[^a-z|A-Z|0-9|!”#$%’()*+,-./:;<=>?@_`{}~]/;
  let PWExpRes = PWExp.test(uPW.value);

  let NumberExp = /[^0-9]/;
  let NumberExpRes_01 = NumberExp.test(uNum_01.value);
  let NumberExpRes_02 = NumberExp.test(uNum_02.value);
  let NumberExpRes_03 = NumberExp.test(uNum_03.value);
  
  if (uName.value.trim() == "") {
    alert("이름을 입력해주세요.");
    uName.focus();
  } else if (NameExpRes) {
    alert("이름은 한글만 입력 가능합니다."); 
    uName.select(); // 이름 끝
  } else if (uID.value.trim() == "") {
    alert("아이디를 입력해주세요.");
    uID.focus();
  } else if (IDExpRes) {
    alert("아이디는 영문 대소문자,숫자로 설정 가능합니다.");
    uID.select();
  } else if (idConfirm == false) {
    alert("아이디 중복검사를 실행해주세요.");
    uIDChkBtn.focus(); // 아이디 끝
  }else if (uPW.value.trim() == "") {
    alert("패스워드를 입력해주세요.");
    uPW.focus();
  } else if (PWExpRes) {
    alert("패스워드 형식이 올바르지 않습니다.");
    uPW.select();
  } else if (uPW.value.length < 8 || uPW.value.length > 16) {
    alert("8~16자 이내로 조합하여 설정해주세요.");
    uPW.select();
  } else if (uPW.value.search(uID.value) > -1) {
    alert("아이디와 4자리 이상 동일한 패스워드는 사용이 불가합니다.");
    uPW.select();
  } else if (/(\w)\1\1\1/.test(uPW.value)) {
    alert("4자리 이상 반복되는 문자와 숫자는 사용이 불가합니다.");
    uPW.select();
  } else if (uPWRe.value.trim() == "") {
    alert("패스워드를 재입력해주세요.");
    uPWRe.focus();
  } else if (uPW.value.trim() != uPWRe.value.trim()) {
    alert("패스워드가 일치하지 않습니다.");
    uPWRe.select(); // 비밀번호 끝
  } else if (uNum_01.value.trim() == "" || uNum_02.value.trim() == "" || uNum_03.value.trim() == "") {
    alert("휴대폰번호를 입력해주세요.");
    uNum_01.focus();
  } else if (NumberExpRes_01 || NumberExpRes_02 || NumberExpRes_03) {
    alert("휴대폰번호는 숫자만 입력가능합니다.");
    uNum_01.focus();
  } else if (uNum_01.value.length < 3 || uNum_02.value.length < 4 || uNum_03.value.length < 4) {
    alert("휴대폰번호를 정확하게 입력해주세요.");
    uNum_01.focus(); // 휴대폰번호 끝
  } else if (emailID.value.trim() == "") {
    alert("이메일을 입력해주세요.");
    emailID.focus();
  } else if (emailAddress.value.trim() == "") {
    alert("이메일 주소를 선택해주세요.");
    emailAddress.focus();
  } else if (emailConfirm == false) {
    alert("이메일 중복검사를 실행해주세요.");
    uEmailChkBtn.focus(); // 이메일 끝
  } else if (pointPW.value.trim() == "") {
    alert("포인트 비밀번호를 입력해주세요.");
    pointPW.focus();
  } else if (pointPW.value.length < 6 || pointPW.value.length > 6) {
    alert("포인트 비밀번호는 6자리로 설정 가능합니다.");
    pointPW.focus();
  } else if (pointPWRe.value.trim() == "") {
    alert("포인트 비밀번호를 확인해주세요.");
    pointPWRe.focus();
  } else if (pointPW.value.trim() != pointPWRe.value.trim()) {
    alert("포인트 비밀번호가 일치하지 않습니다.");
    pointPWRe.select(); // 포인트비밀번호 끝
  } else {
    alert("회원가입이 완료되었습니다.");
    document.querySelector("form").action = "../index.html";
    document.querySelector("form").submit();
  }
  
});