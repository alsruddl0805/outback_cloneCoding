
let allCheck = document.querySelector("#allCheck");
let product_chk = document.querySelectorAll(".product_chk");
let delBtn = document.querySelector("#chkDelete");
let totalPrice = document.querySelectorAll(".totalPrice");
allCheck.checked = true;


// 1. 체크박스 기능 구현하기

for (let i=0; i<product_chk.length; i++) {

  // 전체선택 동의 활성화
  allCheck.addEventListener("click",function() {
    let allChkVal = allCheck.checked;    
    product_chk[i].checked = allChkVal;
  });

// 개별선택 동의 활성화
product_chk[i].addEventListener("click",function() {
  if (product_chk[0].checked && product_chk[1].checked) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
});
product_chk[i].checked = true;

}

// 2. 선택 삭제 활성화

delBtn.addEventListener("click",function(){
  if (confirm("선택하신 상품을 삭제하시겠습니까?")) {

    for (let i=0; i<totalPrice.length; i++) {
      if (product_chk[0].checked == false && product_chk[1].checked == false) {
        alert("선택된 상품이 없습니다.");
        return;
      } else if (allCheck.checked) { // 전체선택일때 2개 다 삭제
          $("#cartTable tr:nth-child(2) td").remove();
          $("#cartTable tr:nth-child(3) td").remove();
          // allCheck.checked = false;
          totalPrice[i].value = 0;
      } else if (product_chk[0].checked) { // line 1 선택시 해당 라인 삭제
          $("#cartTable tr:nth-child(2) td").remove();
      } else if (product_chk[1].checked) { // line 2 선택시 해당 라인 삭제
          $("#cartTable tr:nth-child(3) td").remove();
      }
    }

  }
});

// 3. minus,plus 버튼 활성화 & 수량 변동

let minusBtn = document.querySelectorAll(".minusBtn");
let plusBtn = document.querySelectorAll(".plusBtn");

let product_cnt = document.querySelectorAll(".product_cnt");
let product_price = document.querySelectorAll(".product_price");
let basePrice = document.querySelectorAll(".basePrice");


// minus

for (let i=0; i<minusBtn.length; i++) {
  minusBtn[i].addEventListener("click",minus_cnt);
    
function minus_cnt() {
  let sum = parseInt(product_price[i].value);
  
  if (product_cnt[i].value > 1) { // 수량 감소
    product_cnt[i].value--; 
    sum -= parseInt(basePrice[i].innerText); // 수량에 따른 금액 감소
    product_price[i].value = sum;
  } else {
    alert("최소수량은 1개입니다.");
    product_cnt[i].value = 1;
  } 

    // 체크 해제 시 minus 버튼 누르면 자동 체크
    if (product_chk[i].checked == false) {
      if (minus_cnt) {
        product_chk[i].checked = true;
        allCheck.checked = true;
      }
    }

  product_total_price();
}

}

// plus

for (let i=0; i<plusBtn.length; i++) {
plusBtn[i].addEventListener("click",plus_cnt);

function plus_cnt() {
  let sum = parseInt(product_price[i].value);

  if (product_cnt[i].value < 10) { // 수량증가
    product_cnt[i].value++;
    sum += parseInt(basePrice[i].innerText);// 수량에 따른 금액 증가
    product_price[i].value = sum;
  } else {
    alert("최대수량은 10개입니다.\n10개 이상은 가까운 매장으로 전화주문 부탁드립니다.");
    product_cnt[i].value = 10;
  }

  // 체크 해제 시 plus 버튼 누르면 자동 체크
  if (product_chk[i].checked == false) {
    if (plus_cnt) {
      product_chk[i].checked = true;
      allCheck.checked = true;
    }
  }
  
  product_total_price();
}

}

 // 4. 각 상품 금액 총 합계 추출

function product_total_price() {
  let addPrice = document.querySelector(".addPrice").value;
  addPrice = parseInt(addPrice);
  let totalSum = 0;

  for (let i=0; i<product_price.length; i++) { // 각 합계
    totalSum += parseInt(product_price[i].value);
  }

  for (let i=0; i<totalPrice.length; i++) { // 총 합계
    let totalSumAdd = totalSum + addPrice;
    totalPrice[0].value = totalSum;
    totalPrice[1].value = totalSumAdd;
  }
}

product_total_price();

// 5. 체크박스 해제 시 금액 변동

function priceChk() {
  for (let i=0; i<product_chk.length; i++) {
    product_chk[i].addEventListener("change",function(){

    let addPrice = 2500;
    totalPrice[0].value = 0;
    totalPrice[1].value = 0;

    if (product_chk[0].checked == false && product_chk[1].checked == false) {
      return;
    } else if (product_chk[0].checked == false) {
      totalPrice[0].value = product_price[1].value;
      totalPrice[1].value = parseInt(product_price[1].value) + addPrice;
    } else if (product_chk[1].checked == false) {
      totalPrice[0].value = product_price[0].value;
      totalPrice[1].value = parseInt(product_price[0].value) + addPrice;
    } else if (product_chk[0].checked && product_chk[1].checked) {
      totalPrice[0].value = parseInt(product_price[0].value) + parseInt(product_price[1].value);
      totalPrice[1].value = parseInt(product_price[0].value) + parseInt(product_price[1].value) + addPrice;
    }

    });
  }
}

priceChk();

// 6. 주문하기 버튼 활성화

let orderBtn = document.querySelector("#orderBtn");
orderBtn.addEventListener("click",function(){
    if (confirm("전체 상품을 주문하시겠습니까?")) {
      if (product_chk[0].checked == false && product_chk[1].checked == false) {
        alert("선택된 상품이 없습니다.");
      } else {
        alert("주문이 완료되었습니다.")
      }
    }
});


// 7. 숫자에 콤마 넣기

for (let i=0; i<product_price.length; i++) {
  basePrice_Comma = basePrice[i].innerText;
  basePrice[i].innerText = sepComma(basePrice_Comma);
  
  product_price_Comma = product_price[i].value;
  product_price[i].value = sepComma(product_price_Comma);

  totalPrice_Comma = totalPrice[i].value;
  totalPrice[i].value = sepComma(totalPrice_Comma);
}

// 콤마 삽입

function sepComma(inputMoney) {
  let pattern = /\B(?=(\d{3})+(?!\d))/g;
  let res = inputMoney.replace(pattern, ",");
  return res;
}

// 콤마 제거 

function removeComma(restore) {
  if (restore.search(',')) {
      arrComma = restore.split(',');
      for (i = 0; ; i++) {
          if (!arrComma[i]) break;

          if (i == 0) {
              restore = arrComma[i];
          } else {
              restore = restore + arrComma[i];
          }
      }
  }
  return restore;
}