// Import images
import lasagna from './images/lasagna.jpg';
import eggAvocado from './images/egg-avocado-toast.jpeg';
import turkeySandwich from './images/turkey-sandwich.jpg';

export const home = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    // First div element
    const heroImage = document.createElement('div');
    heroImage.classList.add('hero-image');
    content.appendChild(heroImage);

    const section = document.createElement('div');
    section.classList.add('hero-text');
    const title = document.createElement('h2');
    title.textContent = 'The Greatest Restaurant in the World';

    const para = document.createElement('p');
    para.textContent = `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
        `
    section.append(title, para);
    content.appendChild(section);

    // Second div element
    const food = document.createElement('div');
    food.classList.add('food');

    // Data for each card to be displayed
    const cardData = [
        { title: 'Dish 1', text: 'Hi I am Dish1', price: '$100', src: lasagna},
        { title: 'Dish 2', text: 'Okay Dish2', price: '$103', src: eggAvocado },
        { title: 'Dish 2', text: 'This is Dish3', price: '$90', src: turkeySandwich },
    ]

    cardData.forEach(item => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Image container within the card
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('img-container');
        const image = document.createElement('img');

        // div element for Right part of the card
        const cardRight = document.createElement('div');
        cardRight.classList.add('card-right');
        const title = document.createElement('h3');
        const text = document.createElement('p');
        const price = document.createElement('price');
        
        image.src = item.src;
        image.classList.add('card-image');
        imageContainer.appendChild(image);
        title.textContent = item.title;
        text.textContent = item.text;
        price.textContent = item.price;

        cardRight.append(title, text, price);
        card.append(imageContainer, cardRight);
        food.appendChild(card);
    })

    content.appendChild(food);
}

