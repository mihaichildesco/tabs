const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const idBtn = e.target.dataset.id;

  if (idBtn) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
  }

  articles.forEach((article) => {
    article.classList.remove('active');
  });

  const element = document.getElementById(idBtn);
  element.classList.add('active');
});
