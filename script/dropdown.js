function toggleDropdown(button) {
  const dropdown = button.closest('li').querySelector('.dropdown');
  dropdown.classList.toggle('show-dropdown');
}

