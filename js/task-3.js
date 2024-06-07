document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('name-input');
  const outputElement = document.getElementById('name-output');

  inputElement.addEventListener('input', () => {
    const trimmedValue = inputElement.value.trim();
    outputElement.textContent =
      trimmedValue === '' ? 'Anonymous' : trimmedValue;
  });
});
