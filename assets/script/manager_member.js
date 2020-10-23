// email option 추가

let email = ["직접입력","outback.co.kr","empal.com","naver.com","gmail.com","hanmail.net","hanmir.com","hitel.net",
"hotmail.com","korea.com","lycos.co.kr","nate.com"];
let addEmailOption = "";

for (let i = 0; i<email.length; i++) {
    addEmailOption += "<option>" + email[i] + "</option>";
}

let select_Email = document.querySelector("#select_email");
select_Email.innerHTML = addEmailOption;

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

let start_year="1920";
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

// 유효성 검사

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click",function(){
  
  let uName = document.querySelector("#uName");
  let uNum_01 = document.querySelector("#uNum_01");
  let uNum_02 = document.querySelector("#uNum_02");
  let uNum_03 = document.querySelector("#uNum_03");
  let emailID = document.querySelector("#emailID");
  let emailAddress = document.querySelector("#emailAddress");

  // 이름, 아이디, 비밀번호, 전화번호 유효성 검사

  let NameExp = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let NameExpRes = NameExp.test(uName.value);

  let NumberExp = /[^0-9]/;
  let NumberExpRes_01 = NumberExp.test(uNum_01.value);
  let NumberExpRes_02 = NumberExp.test(uNum_02.value);
  let NumberExpRes_03 = NumberExp.test(uNum_03.value);

  let EmailIDExp = /[^a-z|A-Z|0-9|]/;
  let EmailAddressExp = /[^a-z|A-Z|.]/;

  // 이름
  if (NameExpRes) {
    alert("이름은 한글만 입력 가능합니다."); 
    uName.select();
  } 
  
  // 휴대폰번호
  else if (NumberExpRes_01 || NumberExpRes_02 || NumberExpRes_03) {
    alert("휴대폰번호는 숫자만 입력가능합니다.");
    uNum_01.focus();
  }
  
  // 이메일
  else if (EmailIDExp.test(emailID.value)) {
    alert("아이디는 영문 대소문자,숫자로 입력 가능합니다.");
    emailID.focus();
  } else if (EmailAddressExp.test(emailAddress.value)) {
    alert("이메일 주소의 형식이 올바르지 않습니다.");
    emailAddress.focus();
  }

  // submit
  else {
    alert("검색을 완료하였습니다.");
  }
});