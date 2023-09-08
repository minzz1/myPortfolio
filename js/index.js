window.onscroll = scrollIF();

function scrollIF() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("gnb").style.top = "0px";
  } else {
    document.getElementById("gnb").style.top = "-80px";
  }
}
