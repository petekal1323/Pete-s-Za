import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.getElementById('content');
const buttons = document.querySelectorAll('nav button');

function clear() {
  content.textContent = '';
}

function setActive(id) {
  buttons.forEach(btn => btn.classList.toggle('active', btn.id === id));
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    clear();
    if (btn.id === 'home')    loadHome();
    if (btn.id === 'menu')    loadMenu();
    if (btn.id === 'contact') loadContact();
    setActive(btn.id);
  });
});

// initial load
loadHome();
setActive('home');
