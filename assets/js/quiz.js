
  // Get all toggle buttons
  const toggleButtons = document.querySelectorAll('.toggle-button');

  // Add click event listener to each button
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the answer element
      const answer = this.previousElementSibling;
      // Toggle the visibility of the answer
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      // Change the text of the button
      this.textContent = (answer.style.display === 'block') ? 'Fjern svar' : 'Vis svar';
    });
  });
