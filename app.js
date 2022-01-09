const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    colorCode = document.getElementById('text').value;
    document.body.style.backgroundColor = colorCode;
    color.textContent = colorCode;

    //clear input
    document.getElementById('text').value = '';
})