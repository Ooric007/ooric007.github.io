function resizeIframe(iframe) {
  if (window.innerWidth <= 768) {
    if (iframe === document.getElementById("footerSection")) {
      // Adjust the height for the footerSection iframe on mobile
      iframe.style.height = "88px"; // Set the desired height for the footerSection iframe on mobile
    } else {
      // Adjust the height for other iframes on mobile
      iframe.style.height = "584px"; // Set the desired height for mobile iframes other than footerSection
    }
  } else if (iframe === document.getElementById("contactSection")) {
    // Adjust the height for the contactSection iframe on desktop
    iframe.style.height = "604px"; // Set the desired height for the contactSection iframe
  } else if (iframe === document.getElementById("footerSection")) {
    // Adjust the height for the footerSection iframe on desktop
    iframe.style.height = "74px"; // Set the desired height for the footerSection iframe
  } else {
    // Resize other iframes as before on desktop
    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + "px";
  }
}

function adjustIframeHeight() {
  var iframes = document.querySelectorAll("#iframe-container iframe");
  iframes.forEach(function (iframe) {
    resizeIframe(iframe);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  adjustIframeHeight();
});

window.addEventListener("resize", function () {
  adjustIframeHeight();
});
