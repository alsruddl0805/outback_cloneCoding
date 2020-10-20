// cart 보완
// 1. 선택삭제 alert 뜨는 if 조건문 검사
// 2. checked 되어야결제 예상금액 확인 가능


let allCheck = document.querySelector("#allCheck");
let product_chk = document.querySelectorAll(".product_chk");
let delBtn = document.querySelector("#chkDelete");
allCheck.checked = true;

// 전체선택 활성화

allCheck.addEventListener("click",function() {
  let allChkVal = allCheck.checked;

  for (let i=0; i<product_chk.length; i++) {
    product_chk[i].checked = allChkVal;
  }
});

// 개별선택 활성화

for (let i=0; i<product_chk.length; i++) { 
  product_chk[i].addEventListener("click",function() {
    if (product_chk[0].checked && product_chk[1].checked) {
      allCheck.checked = true;
    } else {
      allCheck.checked = false;
    }
  });
  product_chk[i].checked = true;
}

// 선택삭제 활성화

delBtn.addEventListener("click",function(){
  if (confirm("선택하신 상품을 삭제하시겠습니까?")) {
    if (product_chk[0].checked == false && product_chk[1].checked == false) {
      alert("선택된 상품이 없습니다.");
      return;
    } else if (allCheck.checked) { // 전체선택일때 2개 다 삭제
        $("#cartTable tr:nth-child(2) td").remove();
        $("#cartTable tr:nth-child(3) td").remove();
    } else if (product_chk[0].checked) { // line 1 선택시 해당 라인 삭제
        $("#cartTable tr:nth-child(2) td").remove();
    } else if (product_chk[1].checked) { // line 2 선택시 해당 라인 삭제
        $("#cartTable tr:nth-child(3) td").remove();
    }
  }
});


// minus,plus 버튼 활성화 & 수량 변동

let minusBtn = document.querySelectorAll(".minusBtn");
let plusBtn = document.querySelectorAll(".plusBtn");

let product_cnt = document.querySelectorAll(".product_cnt");
let product_price = document.querySelectorAll(".product_price");
let basePrice = document.querySelectorAll(".basePrice");
let totalPrice = document.querySelectorAll(".totalPrice");

// minus

for (let i=0; i<minusBtn.length; i++) {
  minusBtn[i].addEventListener("click",function(){
    
  let sum = parseInt(product_price[i].value);
    
    if (product_cnt[i].value > 1) { // 수량 감소
      product_cnt[i].value--; 
      sum -= parseInt(basePrice[i].innerText); // 수량에 따른 금액 감소
      product_price[i].value = sum;
    } else {
      alert("최소수량은 1개입니다.");
      product_cnt[i].value = 1;
    } 

    product_total_price();

  });
}

// plus

for (let i=0; i<plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function() {
  
  let sum = parseInt(product_price[i].value);
  
    if (product_cnt[i].value < 10) { // 수량증가
      product_cnt[i].value++;
      sum += parseInt(basePrice[i].innerText);// 수량에 따른 금액 증가
      product_price[i].value = sum;
    } else {
      alert("최대수량은 10개입니다.\n10개 이상은 가까운 매장으로 전화주문 부탁드립니다.");
      product_cnt[i].value = 10;
    }

    product_total_price();

  });   
};


 // 각 상품 금액 총 합계 추출

function product_total_price() {
  let addPrice = 2500;
  let totalSum = 0;

  for (let i=0; i<product_price.length; i++) { // 각 합계
    totalSum += parseInt(product_price[i].value);
  }
  
  for (let i=0; i<totalPrice.length; i++) { // 총 합계
    let totalSumAdd = totalSum + addPrice;
    totalPrice[0].value = totalSum.toLocaleString();
    totalPrice[1].value = totalSumAdd.toLocaleString();
  }
}

product_total_price();







// 주문하기 버튼 활성화

let orderBtn = document.querySelector("#orderBtn");
orderBtn.addEventListener("click",function(){
    if (confirm("전체 상품을 주문하시겠습니까?")) {
      alert("주문이 완료 되었습니다.");
    }
});