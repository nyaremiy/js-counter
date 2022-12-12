const count = document.querySelector('.count');
const plus = document.querySelector('#js-btn-plus');
const minus = document.querySelector('#js-btn-minus');
const reset = document.querySelector('#js-btn-reset');

let counter = 0;

plus.addEventListener('click', () => {
  count.textContent = ++counter;
})

minus.addEventListener('click', () => {
  count.textContent = --counter;
})

reset.addEventListener('click', () => {
  counter = 0;
  count.textContent = counter;
})