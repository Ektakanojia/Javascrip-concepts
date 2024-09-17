document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');
  
    // Open modal when the button is clicked
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  
    // Close modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  