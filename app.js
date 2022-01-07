const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    colorCode = document.getElementById('text').value;
    document.body.style.backgroundColor = colorCode;
    color.textContent = colorCode;
})