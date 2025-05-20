export default function loadContact() {
  const content = document.getElementById('content');
  const h2 = document.createElement('h2');
  h2.textContent = 'Contact Us';
  const addr = document.createElement('p');
  addr.textContent = '123 Main St, Anytown, USA';
  const phone = document.createElement('p');
  phone.textContent = '📞 (123) 456-7890';
  content.append(h2, addr, phone);
}
