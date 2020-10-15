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
//  1.선택삭제를 누르면 confirm 창 띄우기
// 2. 만약 1번이 checked 되어있다면 1번의 tr없애기
// 3. 만약 2번이 checked 되어있다면 2 번의 tr없애기
//https://tonks.tistory.com/141 참고

let delBtn = document.querySelector("#chkDelete");
// delBtn.addEventListener("click",function(){
//     if (confirm("선택한 상품을 삭제하시겠습니까?")) {
//         if (product_01_chk == false || product_02_chk == false) {
//             alert("선택된 상품이 없습니다.");
//         } else if (product_01.checked) {
//             $("#cart_line_01").remove();
//         } else if (product_02.checked) {
//             $("#cart_line_02").remove();
//         }
//     }
// });

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