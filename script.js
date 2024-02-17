// your code here
 function generateURL() {
      var nameValue = encodeURIComponent(document.getElementById('name').value);
      var yearValue = encodeURIComponent(document.getElementById('year').value);

      var queryString = `?name=${nameValue}&year=${yearValue}`;
      document.getElementById('url').innerText = `https://localhost:8080/${queryString}`;
    }