export const menu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menuPage = document.createElement('div');
    menuPage.textContent = 'This is the menu page. Deal with it.'

    content.appendChild(menuPage);
}