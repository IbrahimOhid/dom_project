const colorBox = document.querySelector('#color-box');
const finalColor = document.querySelector('#final-color');
const generateBtn = document.querySelector('#generate-btn');

const generateRgbColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

generateBtn.addEventListener('click', () => {
    finalColor.innerHTML = generateRgbColor();
    const color = generateRgbColor();
    colorBox.style.backgroundColor = color;
})