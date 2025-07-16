import "./styles.css";

import { home } from './homepage.js';
import { menu } from './menu.js';
import { about } from './about.js';
import { contact } from './contact.js';

// Call the home function once the page loads
document.addEventListener('DOMContentLoaded', () => {
    home();
})

document.querySelector('#home').addEventListener('click', () => {
    home();
}) 

document.querySelector('#menu').addEventListener('click', () => {
    menu();
}) 

document.querySelector('#about').addEventListener('click', () => {
    about();
}) 

document.querySelector('#contact').addEventListener('click', () => {
    contact();
})

 