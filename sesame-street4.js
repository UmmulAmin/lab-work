document.addEventListener('DOMContentLoaded', function() {
  var cookieHeader = document.getElementById('cookie-header');
  cookieHeader.style.color = 'yellow';
});


  document.addEventListener('DOMContentLoaded', function() {
    function updateCookieCount() {
      var cookieJar = document.getElementById('cookie-jar');
      var cookies = cookieJar.getElementsByTagName('li');
      var cookieCount = cookies.length;
      var cookieCountElement = document.getElementById('cookie-count');

      cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
      cookieCountElement.style.color = '#f7f16d';
    }

  
    function removeLastCookie() {
      var cookies = document.getElementsByClassName('cookie');

      if (cookies.length > 0) {
        var lastCookie = cookies[cookies.length - 1];

        lastCookie.parentNode.removeChild(lastCookie);

        updateCookieCount();
      }
    }
  
    updateCookieCount(); // Initial count
  
    setInterval(removeLastCookie, 30000);
  });
  