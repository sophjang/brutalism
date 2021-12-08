var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "center",
  contain: true,
  freescroll: true,
  wrapAround: true
  /*autoPlay: 750,*/
});

var flkty = new Flickity(".main-carousel", {});

AOS.init();