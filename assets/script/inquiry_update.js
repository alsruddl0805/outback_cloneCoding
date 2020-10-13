// inquiry_보완
// 1. input:date 속성 수정
// 2. 유효성 검사
// 3. 파일첨부 js 확인

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


//첨부파일 확장자 체크
// let checkFile = document.querySelector("#file-input");
// checkFile.addEventListener("change", attachmentSubmit);

// function attachmentSubmit() {
//   let attachment = document.querySelector('#file-input').value;
//   attachment = attachment.slice(attachment.indexOf(".") + 1).toLowerCase();
  
//   if (attachment !== "pdf" && attachment !== "docx" && attachment !== "pptx" && attachment !== "xlsx" && attachment !== "jpg" && attachment !== "gif" && attachment !== "png") {
//     alert("첨부가 불가능한 파일입니다.\n실행파일 또는 소스파일은 업로드 불가 입니다."); 
//   }
  
// }

// //파일 선택 시 나타내주기

// $(document).ready(function(){ 
//   let fileTarget = $(".filebox #file-input"); 
//   fileTarget.on("change", function(){     // 값이 변경되면 
//     if(window.FileReader){ // modern browser 
//       var filename = $(this)[0].files[0].name; 
//     } 
//     else { // old IE 
//       var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
//     } 
//     // 추출한 파일명 삽입 
//     $(this).siblings(".file-upload-name").val(filename); 
//   }); 
// });