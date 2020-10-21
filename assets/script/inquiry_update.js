// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

// inquiryType option 추가

let inquiryType = ["매장서비스","딜리버리 서비스","부메랑 클럽","홈페이지 및 APP","이벤트","제휴 서비스","지류상품권",
"기프트카드/모바일상품권","채용문의","기타"];
let addinquiryOption = "";

for (let i = 0; i<inquiryType.length; i++) {
  addinquiryOption += "<option>" + inquiryType[i] + "</option>";
}

let select_inquiry = document.querySelector("#inquiryType");
select_inquiry.innerHTML = addinquiryOption;

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

 // outbackStore option 추가

let store = ["방문하셨던 매장을 선택해 주세요","가산점","강남점","갤러리아 광교점","거제점","건대스타시티점","경남진주점","공항점","광주광천점","구파발점",
"김포점","김해점","남천점","남포점","노원점","대구 신세계점", "대구황금점","대전둔산점","대전현대아울렛점","덕천점","도곡점","동대문점","동래점","동탄점",
"명동점","목동점","목포남악점","미아점","부산하단점","부천상동점","부천역사점","부평점","분당미금점","분당서현점","상봉점","서대문점","서면점","서울대점",
"센트럴시티점","송도점","수원역사점","수원영통점","여의도점","오산점","인천구월점","합정점","해운대점"];
let addStoreOption = "";

for (let i = 0; i<store.length; i++) {
    addStoreOption += "<option>" + store[i] + "</option>";
}

let outbackStore = document.querySelector("#outbackStore");
outbackStore.innerHTML = addStoreOption;


// 달력 나타내기

let picker = new Pikaday({ 
  field: document.getElementById('visitDate')
});


// textarea 글자 수 제한

let numOfChar = 4000;

let contentText = document.querySelector("#content");
contentText.addEventListener("keyup",function(){
    let contentVal = contentText.value;
    let len = contentVal.length;
      if (len > numOfChar) {
        contentVal = contentVal.substring(0,numOfChar);
        document.querySelector("#content").value = contentVal;
        len = contentText.length;
      }
});


//첨부파일 확장자 체크
let checkFile = document.querySelector("#file-input");
checkFile.addEventListener("change", attachmentSubmit);

function attachmentSubmit() {
  let attachment = document.querySelector('#file-input').value;
  attachment = attachment.slice(attachment.indexOf(".") + 1).toLowerCase();
  
  if (attachment !== "jpg" && attachment !== "gif" && attachment !== "png" && attachment !== "bmp") {
    alert("파일 업로드는확장자가 JPG, JPEG, GIF, PNG, BMP 인 파일만 업로드 가능 합니다."); 
  }
}

//파일 선택 시 나타내주기

$(document).ready(function(){ 
  let fileTarget = $(".filebox #file-input"); 
  fileTarget.on("change", function(){
    if(window.FileReader){ 
      var filename = $(this)[0].files[0].name; 
    } 
    else { // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop();
    } 
    // 추출한 파일명 삽입 
    $(this).siblings(".file-upload-name").val(filename); 
  }); 
});

// 유효성 검사

let inquiryBtn = document.querySelector("#inquiryBtn");
inquiryBtn.addEventListener("click",function(){
  
  let uName = document.querySelector("#uName");
  let uNum_01 = document.querySelector("#uNum_01");
  let uNum_02 = document.querySelector("#uNum_02");
  let uNum_03 = document.querySelector("#uNum_03");
  let emailID = document.querySelector("#emailID");
  let emailAddress = document.querySelector("#emailAddress");
  let select_store = document.querySelector("#outbackStore");
  let visitDate = document.querySelector("#visitDate");
  let title = document.querySelector("#title");
  let content = document.querySelector("#content");
  let useAgree = document.querySelector("#agree").checked;

  // 이름, 전화번호 유효성 검사

  let NameExp = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let NameExpRes = NameExp.test(uName.value);

  let NumberExp = /[^0-9]/;
  let NumberExpRes_01 = NumberExp.test(uNum_01.value);
  let NumberExpRes_02 = NumberExp.test(uNum_02.value);
  let NumberExpRes_03 = NumberExp.test(uNum_03.value);

  let EmailIDExp = /[^a-z|A-Z|0-9|]/;
  let EmailAddressExp = /[^a-z|A-Z|.]/;
  
  // 이름
  if (uName.value.trim() == "") {
    alert("이름을 입력해주세요.");
    uName.focus();
  } else if (NameExpRes) {
    alert("이름은 한글만 입력 가능합니다."); 
    uName.select();
  } 
  
  // 휴대폰번호
  else if (uNum_01.value.trim() == "" || uNum_02.value.trim() == "" || uNum_03.value.trim() == "") {
    alert("휴대폰번호를 입력해주세요.");
    uNum_01.focus();
  } else if (NumberExpRes_01 || NumberExpRes_02 || NumberExpRes_03) {
    alert("휴대폰번호는 숫자만 입력가능합니다.");
    uNum_01.focus();
  } else if (uNum_01.value.length < 3 || uNum_02.value.length < 4 || uNum_03.value.length < 4) {
    alert("휴대폰번호를 정확하게 입력해주세요.");
    uNum_01.focus();
  } 
  
  // 이메일
  else if (emailID.value.trim() == "") {
    alert("이메일을 입력해주세요.");
    emailID.focus();
  } else if (EmailIDExp.test(emailID.value)) {
    alert("아이디는 영문 대소문자,숫자로 입력 가능합니다.");
    emailID.focus();
  } else if (emailAddress.value.trim() == "") {
    alert("이메일 주소를 선택해주세요.");
    emailAddress.focus();
  } else if (EmailAddressExp.test(emailAddress.value)) {
    alert("이메일 주소의 형식이 올바르지 않습니다.");
    emailAddress.focus();
  } 
  
  // 선택 Area
  else if (select_store.value == "방문하셨던 매장을 선택해 주세요") {
    alert("방문하셨던 매장을 선택해 주세요.");
    select_store.focus();
  } else if (visitDate.value == "") {
    alert("방문하셨던 날짜를 선택해 주세요.");
    visitDate.focus();
  } else if ($("input[name=satisfaction]:radio:checked").length<1) {
    alert("서비스만족도를 체크해주세요.");
    return false;
  } else if ($("input[name=with]:radio:checked").length<1) {
    alert("동반고객을 체크해주세요.");
    return false;
  } else if ($("input[name=menuSelect]:radio:checked").length<1) {
    alert("메뉴를 결정하게 된 계기를 체크해주세요.");
    return false;
  } 
  
  // 문의사항 Area
  else if (title.value.trim() == "") {
    alert("제목을 입력해주세요.");
    title.focus();
  } else if (content.value.trim() == "") {
    alert("내용을 입력해주세요.");
    content.focus();
  } 
  
  // 동의 후 update
  else if (useAgree == false) {
    alert("개인정보수집이용에 동의를 해주세요.");
  } else if (confirm("고객의 소리를 등록하시겠습니까?")) {
    alert("등록에 성공하였습니다.");
    document.querySelector("form").action = "inquiry_update.html";
    document.querySelector("form").submit(); 
  }

});