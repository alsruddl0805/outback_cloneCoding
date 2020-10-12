// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

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