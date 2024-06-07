function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', () => {
    const e = parseInt(input.value, 10);

    if (e >= 1 && e <= 100) {
      createBoxes(e);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
  });

  function createBoxes(e) {
    boxesContainer.innerHTML = ''; // Очищуємо попередні елементи
    const elements = [];
    for (let i = 0; i < e; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add('box');
      elements.push(box);
    }
    boxesContainer.append(...elements);
  }
});
