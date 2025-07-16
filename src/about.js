export const about = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const aboutPage = document.createElement('div');
    aboutPage.textContent = 'This is the about page. Deal with it.'

    content.appendChild(aboutPage);
}