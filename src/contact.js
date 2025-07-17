export const contact = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-container');
    const title = document.createElement('div');
    title.textContent = 'Contact Form';

    const form = document.createElement('form');
    form.classList.add('contact-form');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    const name = document.createElement('input');
    name.type = 'text';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    const email = document.createElement('input');
    email.type = 'email';
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message';
    const message = document.createElement('input');
    message.type = 'textarea';
    const submit = document.createElement('button');
    submit.textContent = 'Submit';

    form.append(nameLabel, name, emailLabel, email, messageLabel, message, submit);
    contactPage.append(title, form);
    content.appendChild(contactPage);
}