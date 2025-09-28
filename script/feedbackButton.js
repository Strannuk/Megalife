const feedbackButtons = document.querySelectorAll('[data-feedback]');
feedbackButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('.feedback__form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Заявка отправлена!');
  form.reset();
});
