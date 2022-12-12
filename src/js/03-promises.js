// const { formats } = require("flatpickr/dist/utils/formatting");

const delay = document.querySelector('input[name = "delay"]');
const step = document.querySelector('input[name = "step"]')
const amount = document.querySelector('input[name = "amount"]');
const form = document.querySelector("form");


form.addEventListener('submit', onSubmit)

function onSubmit (event) {
  event.preventDefault();
  const delayValue = delay.value;
  const stepValue = step.value;
  const amountValue = amount.value;
  createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  console.log(delayValue, stepValue, amountValue);
  cickleMaker(delay,step,amount);
  clearInput();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log('Success');
        resolve({ position, delay })
      }
      else {
        console.log('Error')
        reject({ position, delay })
      }
    }, delay);
  })
}



const cickleMaker = () => {
  let time = 0;
  for (let i = 1; i < amount; i += 1) {
    if (i === 1) {
      time = delay;
    }else{
      time = time + step.value;
    }
     createPromise(i,time);
  }

}

function clearInput() {
  delay.value = ``;
  step.value= ``;
  amount.value = ``;
}



