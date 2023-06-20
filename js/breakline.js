function adjustLineBreak() {
  const byBreakElement = document.querySelector('.by-break');
  const isMobile = window.innerWidth <= 768;
  
  if (byBreakElement) {
    if (isMobile) {
      byBreakElement.classList.add('by-break-line-break');
    } else {
      byBreakElement.classList.remove('by-break-line-break');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  adjustLineBreak();
});

window.addEventListener('resize', adjustLineBreak);