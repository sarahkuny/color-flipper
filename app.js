const colors = ["red", "orange", "yellow", "green", "blue", "purple", "#c7d6ed", "rgba (255,255,255,)"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];   

} )

function getRandomNumber () {
    return Math.floor(Math.random()* colors.length);
}