const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('Website enquiry - Saarthi Trading and Consultancies');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nPhone: ${data.get('phone') || 'Not provided'}\nEmail: ${data.get('email')}\n\nRequirement:\n${data.get('message')}`
  );
  window.location.href = `mailto:ashwani.pasricha2023@gmail.com?subject=${subject}&body=${body}`;
});
