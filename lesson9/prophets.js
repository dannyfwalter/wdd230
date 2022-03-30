const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthday = document.createElement('p');
    let birthplace = document.createElement('p');

    let number = '';

    if (prophet.order == 1) {
        number = 'st';
    }
    else if (prophet.order == 2) {
        number = 'nd';
    }
    else if (prophet.order == 3) {
        number = 'rd';
    }
    else {
        number = 'th';
    }

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    birthday.textContent = `Date of Birth: ${prophet.birthdate}`;

    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${number} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });



