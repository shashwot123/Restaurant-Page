export const contact = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const contactPage = document.createElement('div');
    contactPage.textContent = 'This is the contact page. Deal with it.'

    content.appendChild(contactPage);
}