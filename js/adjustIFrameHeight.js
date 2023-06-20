function resizeIframe(iframe) {
    if (window.innerWidth <= 768) {
        if (iframe === document.querySelector("#iframe-container iframe:nth-child(2)")) {
            // Adjust the height for the second iframe on mobile
            iframe.style.height = "88px"; // Set the desired height for the second iframe on mobile
          } else {
            // Adjust the height for other iframes on mobile
            iframe.style.height = "584px"; // Set the desired height for mobile iframes other than the second one
          }
    } else if (iframe === document.querySelector("#iframe-container iframe:first-child")) {
      // Adjust the height for the first iframe on desktop
      iframe.style.height = "604px"; // Set the desired height for the first iframe
    } else if (iframe === document.querySelector("#iframe-container iframe:last-child")) {
      // Adjust the height for the last iframe on desktop
      iframe.style.height = "74px"; // Set the desired height for the last iframe
    } else {
      // Resize other iframes as before on desktop
      iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + "px";
    }
  }
  
  function adjustIframeHeight() {
    var iframes = document.querySelectorAll("#iframe-container iframe");
    iframes.forEach(function(iframe) {
      resizeIframe(iframe);
    });
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    adjustIframeHeight();
  });
  
  window.addEventListener("resize", function() {
    adjustIframeHeight();
  });
  