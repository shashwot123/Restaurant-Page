export const about = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-div');

    const title = document.createElement('h2');
    title.textContent = 'About Us';

    const desc = document.createElement('div');
    desc.textContent = `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
    `
    aboutPage.append(title, desc);
    content.appendChild(aboutPage);
}