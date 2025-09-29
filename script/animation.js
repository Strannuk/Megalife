// Инициализация
ScrollReveal().reveal('.block', {
  duration: 1000,      // длительность анимации в мс
  distance: '50px',    // смещение элемента
  easing: 'ease-out',  // тип анимации
  origin: 'bottom',    // направление: top, bottom, left, right
  reset: false         // повторять анимацию при повторном скролле
});


 // Анимация заголовка
  ScrollReveal().reveal('.why-us__title', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    viewFactor: 0.3,
    reset: false,
  });

  // Анимация карточек с задержкой по одной
  ScrollReveal().reveal('.why-us__list-item', {
    origin: 'right',
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    reset: false,
    opacity: 0, 
    viewFactor: 0.3,    // элементы изначально скрыты
    interval: 300   // задержка между каждой карточкой
  });

  // Инициализация ScrollReveal
const srArticles = ScrollReveal({
  distance: '50px',       // смещение
  duration: 1000,          // длительность анимации
  easing: 'ease-out',
  viewFactor: 0.3         // 30% видимости для срабатывания
});

// Получаем все карточки
const articles = document.querySelectorAll('.surveillance, .control');

// Проходим по каждой карточке и задаём анимацию слева/справа с интервалом
articles.forEach((article, index) => {
  srArticles.reveal(article, {
    origin: index % 2 === 0 ? 'left' : 'right', // чётные слева, нечётные справа
    interval: 150
  });
});


const srTarifs = ScrollReveal({
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  viewFactor: 0.2
});

const tarifs = document.querySelectorAll('.paid__tarifs-list-item');

tarifs.forEach((card, index) => {
  // каждые две карточки слева, третья справа
  const groupIndex = Math.floor(index / 2);
  const origin = (groupIndex % 2 === 0) ? 'left' : 'right';

  srTarifs.reveal(card, {
    origin: origin,
    delay: index * 400 // задержка для последовательного появления
  });
});



