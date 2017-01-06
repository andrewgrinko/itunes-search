var CallbackRegistry = {};

document.addEventListener('DOMContentLoaded', documentReady);

function documentReady() {
  var input = document.getElementById('input');
  input.addEventListener('input', _.throttle(getData, 1500, { 'leading': false }));
}

function getData() {
  fetchData(this.value, displayData);
}

function fetchData(input, resolve) {
  var params = '&limit=5&entity=musicArtist';
  var query = 'https://itunes.apple.com/search?term=' + input + params;

  var callbackName = 'cb' + String(Math.random()).slice(-6);
  query += '&callback=CallbackRegistry.' + callbackName;

  CallbackRegistry[callbackName] = function(data) {
    delete CallbackRegistry[callbackName];
    resolve(data.results);
  };

  var elem = document.createElement("script");
  var prev = document.getElementById('loader');
  elem.id = 'loader';
  elem.src = query;

  if (prev) {
    document.head.replaceChild(elem, prev);
  } else {
    document.head.appendChild(elem);
  }
}

function displayData(data) {
  var resultsContainer = document.getElementsByClassName('results')[0];
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
  }
  data.forEach(function (elem) {
    var div = document.createElement('div');
    div.className = 'result';
    div.innerHTML = '<span class="type">' + elem.wrapperType + '</span>' + '<h3>' + '<a href=' + elem.artistLinkUrl + '>' + elem.artistName + '</a>' + '</h3>' + '<p>' + elem.primaryGenreName + '</p>';
    resultsContainer.appendChild(div);
  });
}
