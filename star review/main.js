const stars = document.querySelectorAll('.star-area li');

stars.forEach((star) => {
  star.addEventListener('click', (e) => {
    console.log(e.target.dataset.rating);
  });
});