window.onscroll = scrollIF();

function scrollIF() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("gnb").style.top = "0";
  } else {
    document.getElementById("gnb").style.top = "-30px";
  }
}
