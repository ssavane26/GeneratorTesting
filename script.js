var fetchButton = document.getElementById('fetch-button');

function getApi() {

  var requestUrl = '/random.json?language=en';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })}
    
fetchButton.addEventListener('click', getApi);
