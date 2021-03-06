// 체크박스 구현

let allCheck = document.querySelector("#allCheck");
let memberCheck = document.querySelectorAll(".memberCheck");

for (let i=0; i<memberCheck.length; i++) {

  // 전체선택 활성화
  allCheck.addEventListener("click",function() {
    let allChkVal = allCheck.checked;    
    memberCheck[i].checked = allChkVal;
  }); 

// 개별선택 활성화
memberCheck[i].addEventListener("click",function() {
  if (memberCheck[0].checked && memberCheck[1].checked && memberCheck[2].checked) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
});

}

// 게시판 선택 option 추가

let inquiryType = ["매장서비스","딜리버리 서비스","부메랑 클럽","홈페이지 및 APP","이벤트","제휴 서비스","지류상품권",
"기프트카드/모바일상품권","채용문의","기타"];
let addinquiryOption = "";

for (let i = 0; i<inquiryType.length; i++) {
  addinquiryOption += "<option>" + inquiryType[i] + "</option>";
}

let select_inquiry = document.querySelector("#inquiryType");
select_inquiry.innerHTML = addinquiryOption;

// 게시글 찾기 option 추가

let searchList = ["제목","작성일"];
let addinquiryList = "";

for (let i = 0; i<searchList.length; i++) {
    addinquiryList += "<option>" + searchList[i] + "</option>";
}

let search_inquiry = document.querySelector("#searchList");
search_inquiry.innerHTML = addinquiryList;


// 공지사항 리스트 번호 자동출력

let listNum = document.querySelectorAll(".listNum");
let start = 1;

for (let i = 0; i<listNum.length; i++) {
  let numTxt = start + i;
  listNum[i].innerText = numTxt;
}

// // searchDay hover style

$("#searchDay li").click(function(){
    $(this).toggleClass("on");
});

// 유효성 검사

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click",function(){
    alert("검색을 완료하였습니다.");
});