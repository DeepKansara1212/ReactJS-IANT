const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

function random() {
    return Math.floor(Math.random() * 256)
}

const randomColorGenerator = () => {
    const randomColor = `rgb(${random()}, ${random()}, ${random()})`
    document.body.style.backgroundColor = randomColor
}

let intervalId;

startBtn.addEventListener('click', () => {
    if(!intervalId) {
        intervalId = setInterval(randomColorGenerator, 1000); 
        startBtn.disabled = true;
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
});