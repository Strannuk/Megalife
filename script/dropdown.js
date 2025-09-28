function toggleDropdown(button) {
  const li = button.closest('li');
  const dropdown = li.querySelector('.dropdown');

  document.querySelectorAll('.dropdown').forEach(d => {
    if (d !== dropdown && d.classList.contains('show-dropdown')) {
      d.style.height = '0';
      d.classList.remove('show-dropdown');
      d.closest('li').classList.remove('open'); 
    }
  });

  if (!dropdown.classList.contains('show-dropdown')) {
    li.classList.add('open'); 
    dropdown.classList.add('show-dropdown');
    const scrollHeight = dropdown.scrollHeight;
    dropdown.style.height = scrollHeight + 20 + 'px';
  } else {
    li.classList.remove('open');
    dropdown.style.height = '0';
    dropdown.classList.remove('show-dropdown');
  }
}
