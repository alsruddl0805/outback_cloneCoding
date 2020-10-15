// cart 보완
// 1. 선택삭제 jQuery선택자 변경
// 2. 상품 금액 계산
// 3. 삭제 시 priceArea 값 초기화

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

// 선택삭제 활성화

let delBtn = document.querySelector("#chkDelete");
delBtn.addEventListener("click",function(){
  let select_Chk = document.querySelectorAll(".select_Chk");
  let cartTable = document.querySelector("#cartTable");
  if (confirm("선택한 상품을 삭제하시겠습니까?")){
    for (let i=0; i<select_Chk.length; i++) {
      if (select_Chk[1].checked == false && select_Chk[2].checked == false){
        alert("삭제할 상품을 선택해주세요.");
        return;
      } else if (select_Chk[0].checked) {
        // cartTable.removeChild(cartTable.firstChild);
        $("#cartTable tr:nth-child(2) td").remove();
        $("#cartTable tr:nth-child(3) td").remove();
      } else if (select_Chk[1].checked) {
        $("#cartTable tr:nth-child(2) td").remove();
      } else if (select_Chk[2].checked) {
        $("#cartTable tr:nth-child(3) td").remove();
      }
    }
  }
});

// 품절상품 삭제 버튼 활성화
let soldoutDelete = document.querySelector("#soldoutDelete");
soldoutDelete.addEventListener("click",function(){alert("품절된 상품이 존재하지 않습니다.");})

// // minus,plus 버튼

// let minus_01 = document.querySelector("#minus_01");
// let plus_01 = document.querySelector("#plus_01");
// // minus_01.addEventListener("click",cntDown);
// plus_01.addEventListener("click",cntUp);

// // 상품 수량 증가 & 가격 동기화 - 상품 1

// product_01_price = document.querySelector("#product_01_price").innerText; // 단가

// function cntUp() {
//     let product_01_cnt = document.querySelector("#product_01_cnt").value;
//     product_01_cnt = parseInt(product_01_cnt);

//     if (product_01_cnt < 10) {
//         product_01_cnt++;
//         document.querySelector("#product_01_cnt").value = product_01_cnt;
//     } else {
//         alert("최대 주문수량은 10개 입니다.\n100개 이상 주문은 전화주문상담이 필요합니다.");
//     }

//     let unitPrice_01; // 상품 개별 옵션 가격
//     unitPrice_01 = product_01_price;
//     unitPrice_01 = parseInt(unitPrice_01);
//     unitPrice_01 *= product_01_cnt;
//     document.querySelector("#product_01_price").innerText = unitPrice_01.toString();

//     let totalPrice; // 전체 가격
//     totalPrice = unitPrice_01;
//     totalPrice = parseInt(totalPrice);
//     document.querySelector("#totalPrice").innerText = totalPrice.toString();
// }