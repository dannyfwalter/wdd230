const requestURL = 'https://dannyfwalter.github.io/wdd230/temple/data/data.json';
const cards = document.querySelector('.cards');


function displayTemples(temple) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let photo = document.createElement('img');

    h2.textContent = `${temple.name}`;
    photo.setAttribute('src', temple.image);
    photo.setAttribute('alt', `Image of the ${temple.name} temple`);
    photo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(photo);

    cards.appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    })