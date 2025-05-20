export default function loadHome() {
  const content = document.getElementById('content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to My Restaurant';
  const p = document.createElement('p');
  p.textContent = 'We serve the finest dishes, made fresh daily!';
  content.append(h1, p);
}
