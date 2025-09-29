
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(e) {
  let x = e.target.value.replace(/\D/g, '').slice(0, 11);
  let formatted = '+7 ';
  if(x.length > 1) formatted += '(' + x.slice(1,4);
  if(x.length >= 4) formatted += ') ' + x.slice(4,7);
  if(x.length >= 7) formatted += '-' + x.slice(7,9);
  if(x.length >= 9) formatted += '-' + x.slice(9,11);
  e.target.value = formatted;
});
