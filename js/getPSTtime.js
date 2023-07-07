function updatePSTTime() {
    const date = new Date();
    const options = {
      timeZone: 'America/Los_Angeles',
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    };
    const pstTime = date.toLocaleTimeString('en-US', options);
    
    // Update the time element with the current PST time
    const timeElement = document.getElementById('pst-time');
    timeElement.textContent = pstTime;
  }
  
  // Update the PST time every second
  setInterval(updatePSTTime, 1000);