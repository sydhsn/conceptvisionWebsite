window.onscroll = function() {fixHeader()};
function fixHeader() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('navbarTop').classList.add('fixed-top');
  } else {
    document.getElementById('navbarTop').classList.remove('fixed-top');
  }
}


var typed = new Typed('.headOne', {
  strings: ["Concept Vision Classes","Web Development Classes","Python Classes","Concept Vision Classes"],
  typeSpeed: 30
});



