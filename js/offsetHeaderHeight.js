// Add a click event listener to the anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
  
      const target = document.querySelector(this.getAttribute('href')); // Get the target section
      const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
  
      // Scroll to the target section with an offset to account for the header
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    });
  });
  