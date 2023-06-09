// yung target, ayun yung id na pag sscrollan
// function smoothScroll(event, target) {
//     event.preventDefault();
    
//     const element = document.querySelector(target);
//     const offset = element.offsetTop;
    
//     window.scrollTo({
//       top: offset,
//       behavior: 'smooth'
//     });
//   }
  

function smoothScroll(event, target) {
    event.preventDefault();
  
    const element = document.querySelector(target);
    const offset = element.offsetTop;
    const scrollDuration = 2500; // Adjust the duration (in milliseconds) as needed
  
    const start = window.pageYOffset;
    const distance = offset - start;
    let startTime = null;
  
    function scrollAnimation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
  
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(elapsedTime / scrollDuration, 1);
      const scrollPosition = start + distance * easeInOutCubic(scrollProgress);
  
      window.scrollTo(0, scrollPosition);
  
      if (scrollProgress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  