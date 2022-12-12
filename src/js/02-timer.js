import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

const btnStart = document.querySelector("[data-start]");
btnStart.disabled = true;
const input = document.querySelector("#datetime-picker");

const timerValues = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]")
}



let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      window.alert("Please choose a date in the future")
    } else {
       btnStart.disabled = false;
      btnStart.addEventListener("click", () => { changeTimerValue
        (selectedDates[0]) })
    }
  },
};

const fp = flatpickr(input, options);

function changeTimerValue() {
    const timer = setInterval(() => {
        const startTime = new Date(input.value);
        const currentTime = new Date();
        const deltaTime = startTime - currentTime;
        btnStart.disabled = true;
        // console.log(deltaTime);
        if (deltaTime >= 0) {
            let timerData = convertMs(deltaTime);
            timerValues.days.textContent = timerData.days;
            timerValues.hours.textContent = timerData.hours;
            timerValues.minutes.textContent = timerData.minutes;
            timerValues.seconds.textContent = timerData.seconds;
        } else {
            clearInterval(timer);
        }
    }, 1000);
    }
            
 function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

