// ✅ Final page switch JS for tabs + sidebar

const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.innerText.toLowerCase();

    pages.forEach(page => {
      if (page.dataset.page === target) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});