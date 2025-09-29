document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback__form');
  if (!form) return;

  const nameInput = form.querySelector('input[type="text"]');
  const phoneInput = form.querySelector('#phone');
  const messageInput = form.querySelector('textarea');

  function showError(el, text) {
    el.classList.add('error');
    let msg = el.parentNode.querySelector('.error-message');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'error-message';
      el.parentNode.appendChild(msg);
    }
    msg.textContent = text;
  }

  function removeError(el) {
    el.classList.remove('error');
    const msg = el.parentNode.querySelector('.error-message');
    if (msg) msg.remove();
  }

  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, '');
    });
    nameInput.addEventListener('paste', (e) => {
      const pasted = (e.clipboardData || window.clipboardData).getData('text') || '';
      const cleaned = pasted.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, '');
      if (cleaned !== pasted) {
        e.preventDefault();
        document.execCommand('insertText', false, cleaned);
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let digits = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (!digits.startsWith('7')) digits = ('7' + digits).slice(0, 11);
      let formatted = '+' + (digits[0] || '7');
      if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
      if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7);
      if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);
      if (digits.length >= 9) formatted += '-' + digits.slice(9, 11);
      e.target.value = formatted;
    });
  }

  document.querySelectorAll('[data-feedback]').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const feedbackSection = document.getElementById('feedback');
      if (feedbackSection) feedbackSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    [nameInput, phoneInput, messageInput].forEach(el => removeError(el));

    if (!nameInput || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Введите имя (только буквы, минимум 2 символа)');
      nameInput.focus();
      return;
    }

    const digits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
    if (!phoneInput || digits.length !== 11) {
      showError(phoneInput, 'Введите полный номер: +7 (XXX) XXX-XX-XX');
      phoneInput.focus();
      return;
    }

    if (!messageInput || messageInput.value.trim().length === 0) {
      showError(messageInput, 'Введите сообщение');
      messageInput.focus();
      return;
    }

    const dialog = document.getElementById('submitted__window');
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      const onClose = () => {
        document.body.style.overflow = '';
        dialog.removeEventListener('close', onClose);
      };
      dialog.addEventListener('close', onClose);
    } else {
      alert('Заявка отправлена!');
    }

    form.reset();
  });
});

