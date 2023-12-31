// window.onscroll = scrollIF();

// function scrollIF() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("gnb").style.top = "0";
//   } else {
//     document.getElementById("gnb").style.top = "-30px";
//   }
// }

$(function () {
  var prevScrollTop = 0;

  document.addEventListener("scroll", function () {
    var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    }
    // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
    else {
      $("header").removeClass("active");
    } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
    prevScrollTop = nowScrollTop; // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
  });
});
