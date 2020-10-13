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