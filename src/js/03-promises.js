// const { formats } = require("flatpickr/dist/utils/formatting");

const delayInput = document.querySelector('input[name = "delay"]');
const stepInput = document.querySelector('input[name = "step"]')
const amountInput = document.querySelector('input[name = "amount"]');
const form = document.querySelector(".form");

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

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  let delay = Number(formEl.delay.value);
  let step = Number(formEl.step.value);
  let amount = Number(formEl.amount.value);
  
  // const cickleMaker = () => {
  //   let time = 0;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    // if (amount === 1) {
    //   delay = delay;
    // }else{
    //   delay=delay + step;
    // }
    delay += step;
  }
  console.log(delayInput.value,stepInput.value,amountInput.value)
     clearInput(); 
}



  
function clearInput() {
  delayInput.value = ``;
  stepInput.value= ``;
  amountInput.value = ``;
}



