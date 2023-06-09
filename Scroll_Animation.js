// https://alvarotrigo.com/blog/css-animations-scroll/
function reveal() {
  // d2 seselect lang mga element na nasa animation(sila yung before[from])
  var reveals = document.querySelectorAll(".progress-1, .labels-percent-1, .progress-2, .labels-percent-2, .progress-3, .labels-percent-3, .progress-4, .labels-percent-4, .progress-5, .labels-percent-5, .project-images-wrapper");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    // d2 yung may '.show', iadd eto na yung [to] sa keyframes
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } 
    // commented this one out kung ayaw mong paulit-ulit nag paplay yung animation every time on scroll or on screen yung elements
      // else {
      //   reveals[i].classList.remove("show");
    // }
  }
}
window.addEventListener("scroll", reveal);



