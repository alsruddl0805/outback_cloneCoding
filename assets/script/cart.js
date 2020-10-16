// cart 보완
// 1. 선택삭제 alert 뜨는 if 조건문 검사
// 2. minus,plus 버튼 활성화
// 3. 주문하기 버튼 활성화

// 전체선택 활성화
let allCheck = document.querySelector("#allCheck");
let product_01 = document.querySelector("#product_01");
let product_02 = document.querySelector("#product_02");
product_01.addEventListener("click",allCheckFalse);
product_02.addEventListener("click",allCheckFalse);

allCheck.addEventListener("click",function() {
  let allChkVal = allCheck.checked;
  product_01.checked = allChkVal;
  product_02.checked = allChkVal;
});

// 개별선택 활성화
function allCheckFalse() {
    if (product_01.checked && product_02.checked) {
        allCheck.checked = true;
      } else {
        allCheck.checked = false;
      }
}

// 선택삭제 활성화 (+jQuery)
let delBtn = document.querySelector("#chkDelete");
delBtn.addEventListener("click",function(){
  
  let select_Chk = document.querySelectorAll(".select_Chk");

  if (confirm("선택한 상품을 삭제하시겠습니까?")){
    for (let i=0; i<select_Chk.length; i++) {
      if (select_Chk[1].checked == false && select_Chk[2].checked == false) {
        alert("삭제할 상품을 선택해주세요.");
        return;
      } else if (select_Chk[0].checked) { // 전체선택일때 2개 다 삭제
          $("#cartTable tr:nth-child(2) td").remove();
          $("#cartTable tr:nth-child(3) td").remove();
      } else if (select_Chk[1].checked) { // line 1 선택시 해당 라인 삭제
          $("#cartTable tr:nth-child(2) td").remove();
      } else if (select_Chk[2].checked) { // line 2 선택시 해당 라인 삭제
          $("#cartTable tr:nth-child(3) td").remove();
      }
    }
  }
});

// 품절상품 삭제 버튼 활성화
let soldoutDelete = document.querySelector("#soldoutDelete");
soldoutDelete.addEventListener("click",function(){
  alert("품절된 상품이 존재하지 않습니다.");
});


// minus,plus 버튼 활성화

let minusBtn = document.querySelectorAll(".minusBtn");
let plusBtn = document.querySelectorAll(".plusBtn");


// 각 상품 금액 총 합계 추출

let product_price = document.querySelectorAll(".product_price");
let totalPrice = document.querySelectorAll(".totalPrice");
let sum = 0;

for (let i = 0; i<product_price.length; i++) {
  sum += parseInt(product_price[i].value);
}

for (let j=0; j<totalPrice.length; j++) {
  totalPrice[j].value = sum;
}
