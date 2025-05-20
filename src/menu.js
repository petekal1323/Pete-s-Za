export default function loadMenu() {
  const content = document.getElementById('content');
  const h2 = document.createElement('h2');
  h2.textContent = 'Our Menu';
  const ul = document.createElement('ul');
  ['Pizza','Pasta','Salad'].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
  });
  content.append(h2, ul);
}
