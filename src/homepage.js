export const home = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
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

    const food = document.createElement('div');
    food.classList.add('food');

    const cardData = [
        { title: 'Dish 1', text: 'Hi I am Dish1', price: '$100' },
        { title: 'Dish 2', text: 'Okay Dish2', price: '$103' },
        { title: 'Dish 2', text: 'This is Dish3', price: '$90' },
    ]

    cardData.forEach(({ title, text, price }) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3> ${title} </h3>
            <p> ${text} </p>
            <p> ${price} </p>
        `
        food.appendChild(card);
    })

    content.appendChild(food);
}

