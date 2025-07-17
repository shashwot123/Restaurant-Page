export const menu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menuPage = document.createElement('div');

    menuPage.classList.add('menu-container');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left-div');
    leftDiv.textContent = `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
    ` 
    const midDiv = document.createElement('div');
    midDiv.textContent = `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
    ` 

    const rightDiv = document.createElement('div');
    rightDiv.textContent = `
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the Internet.
    ` 

    menuPage.append(leftDiv, midDiv, rightDiv);

    content.appendChild(menuPage);
}