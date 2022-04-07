function getTheDay(seconds) {
    let mili = seconds * 1000;

    let dayName = '';
    
    const initial = new Date(mili);
    const day = initial.getDay();

    if (day == 0) {
        dayName = 'Sunday';
    }
    else if (day == 1) {
        dayName = 'Monday';
    }
    else if (day == 2) {
        dayName = 'Tuesday';
    }
    else if (day == 3) {
        dayName = 'Wednesday';
    }
    else if (day == 4) {
        dayName = 'Thursday';
    }
    else if (day == 5) {
        dayName = 'Friday';
    }
    else if (day == 6) {
        dayName = 'Saturday';
    }

    console.log(dayName);

    return dayName;
}

const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.290379&lon=-76.61219&exclude=minutely,hourly,alerts&appid=cb79cee8873f7cdea8767743d1cc2f56&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const weathericon = `https://openweathermap.org/img/w/${jsonObject.daily[0].weather[0].icon}.png`;
        const icondesc = jsonObject.daily[0].weather[0].description;

        const weathericontwo = `https://openweathermap.org/img/w/${jsonObject.daily[1].weather[0].icon}.png`;
        const icondesctwo = jsonObject.daily[1].weather[0].description;
        
        const weathericonthr = `https://openweathermap.org/img/w/${jsonObject.daily[2].weather[0].icon}.png`;
        const icondescthr = jsonObject.daily[2].weather[0].description;

        const weathericonfou = `https://openweathermap.org/img/w/${jsonObject.daily[3].weather[0].icon}.png`;
        const icondescfou = jsonObject.daily[3].weather[0].description;

        document.querySelector('#current-temp').textContent = `${Math.round(jsonObject.daily[0].temp.day)} F\xB0`;

        document.querySelector('#weathericon').setAttribute('src', weathericon);
        document.querySelector('#weathericon').setAttribute('alt', icondesc);
        document.querySelector('figcaption').textContent = icondesc;

        document.querySelector('#tomorrow-temp').textContent = `${Math.round(jsonObject.daily[1].temp.day)} F\xB0`;
        document.querySelector('#weathericon-2').setAttribute('src', weathericontwo);
        document.querySelector('#weathericon-2').setAttribute('alt', icondesctwo);

        document.querySelector('#temp-day-three').textContent = `${getTheDay(jsonObject.daily[2].dt)}: ${Math.round(jsonObject.daily[2].temp.day)} F\xB0`;
        document.querySelector('#weathericon-3').setAttribute('src', weathericonthr);
        document.querySelector('#weathericon-3').setAttribute('alt', icondescthr);

        document.querySelector('#temp-day-four').textContent = `${getTheDay(jsonObject.daily[3].dt)}: ${Math.round(jsonObject.daily[3].temp.day)} F\xB0`;
        document.querySelector('#weathericon-4').setAttribute('src', weathericonfou);
        document.querySelector('#weathericon-4').setAttribute('alt', icondescfou);
    });