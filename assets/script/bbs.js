// bbs 보완
// 1. 페이지버튼 클릭 시 class로 색 변화주기
// 2. 공지사항 번호 js로 구현하기

// mainBar

$("#mainBar>li:nth-child(2),#mainBar>li:nth-child(3)").click(function(){
    $(this).children(".subBar").stop().slideToggle(500);
    $(this).toggleClass('mainBarStyle');
    $(this).children(".subBar").toggleClass('subBarStyle');
  });

// pager
// 포커스 되었을때만 class적용
