const sr = ScrollReveal({
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  viewFactor: 0.3,
  reset: false,   
  opacity: 0
});

sr.reveal('.why-us__title, .paid__tarifs-title', {
  origin: 'bottom',
  duration: 1000
});

sr.reveal('.why-us__list-item', {
  origin: 'right',
  interval: 300 
});

document.querySelectorAll('.surveillance, .control').forEach((article, index) => {
  sr.reveal(article, {
    origin: index % 2 === 0 ? 'left' : 'right',
    delay: index * 150
  });
});


const tarifs = document.querySelectorAll('.paid__tarifs-list-item');
tarifs.forEach((card, index) => {
  const groupIndex = Math.floor(index / 2);
  const origin = (groupIndex % 2 === 0) ? 'left' : 'right';
  sr.reveal(card, {
    origin: origin,
    delay: index * 100
  });
});
