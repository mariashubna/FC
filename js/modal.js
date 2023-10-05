(() => {
    // Код для открытия модальных окон
    const openModalButtons = document.querySelectorAll('[data-modal-open]');
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalTitle = button.getAttribute('data-modal-open');
        const modal = document.querySelector(`[data-modal-title="${modalTitle}"]`);
      
        if (modal) {
          modal.classList.remove('is-hidden');
        }
      });
    });
  
    // Код для закрытия модальных окон
    const closeModalButtons = document.querySelectorAll('[data-modal-closed]');
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('[data-modal]');
      
        if (modal) {
          modal.classList.add('is-hidden');
        }
      });
    });
  })();