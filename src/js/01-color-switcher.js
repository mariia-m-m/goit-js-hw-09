const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body')

btnStart.addEventListener("click", onBtnStart)
btnStop.addEventListener('click', onBtnStop)
let Interval = null;

btnStart.disabled = false;

function onBtnStart() {
    Interval =
            setInterval(() =>
                body.style.backgroundColor = getRandomHexColor(), 1000);
        
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    btnStart.setAttribute('disabled', true);
btnStop.removeAttribute('disabled')
}


function onBtnStop() {
    clearInterval(Interval);
btnStart.removeAttribute('disabled');
btnStop.setAttribute('disabled',true)
}
 
