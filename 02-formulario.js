const nameTilte = document.querySelector('#name');
const input = document.querySelector('#input');

const writeName = () => {
    const inputValue = input.value;
    nameTilte.textContent = inputValue;
}