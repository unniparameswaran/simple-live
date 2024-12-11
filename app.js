





function adjustFontSize(sizeChange) {
    const elements = document.querySelectorAll('html');
    let currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
  
    currentFontSize += sizeChange;
    
    elements.forEach(element => {
      element.style.fontSize = currentFontSize + 'px';
    });
  
    setCookie('fontSize5', currentFontSize, 365); // Adjust the cookie expiration as needed
  }
  
  function setCookie(name, value, days, path = '/') {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=' + path;
  }

  
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Check if a font size is stored in the cookie
  const savedFontSize = getCookie('fontSize5');
  if (savedFontSize) {
    document.documentElement.style.fontSize = savedFontSize + 'px';
  }
  
  function increaseFontSize() {
    adjustFontSize(2); // Adjust the value to control the increase amount
  }
  
  function decreaseFontSize() {
    adjustFontSize(-2); // Adjust the value to control the decrease amount
  }

  