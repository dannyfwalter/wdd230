const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4347778&appid=cb79cee8873f7cdea8767743d1cc2f56&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = Math.round(jsObject.main.temp);

    const weathericon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const icondesc = jsObject.weather[0].description;

    document.querySelector('#icon-src').textContent = icondesc;
    document.querySelector('#weathericon').setAttribute('src', weathericon);
    document.querySelector('#weathericon').setAttribute('alt', icondesc);
    document.querySelector('figcaption').textContent = icondesc;

  });