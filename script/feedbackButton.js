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

  if (window.submitted__window) {
    // показываем модальное окно
    window.submitted__window.showModal();

    // блокируем скролл страницы
    document.body.style.overflow = 'hidden';

    // возвращаем скролл при закрытии окна
    window.submitted__window.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  } else {
    alert('Заявка отправлена!');
  }

  form.reset();
});
