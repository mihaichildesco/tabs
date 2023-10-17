const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const idBtn = e.target.dataset.id;

  if (idBtn) {
    btns.forEach((btn) => {
      // remove active from other buttons
      btn.classList.remove('active');
      //  add active to current clicked button
      e.target.classList.add('active');
    });

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(idBtn);
    element.classList.add('active');
  }
});
