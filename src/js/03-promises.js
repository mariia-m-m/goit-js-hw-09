// const { formats } = require("flatpickr/dist/utils/formatting");

const delay = document.querySelector('input[name = "delay"]');
const step = document.querySelector('input[name = "step"]')
const amount = document.querySelector('input[name = "amount"]');
const form = document.querySelector("form")


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
    .then(({ position, delay }) => {
      console.log(`✅Fulfilled promise ${position} in ${delay}ms`)
      return { position, delay };
    })
    .catch(({ position, delay }) => {
      console.log(`❌Rejected ptomise ${position} in${delay}ms`)
    }
    );
}

const promiseStep=(delay, step, amount) => {
  let time = 0;
  for (let i = 1; i <= amount; i += 1) {
    if (i) {
      time = Number(time)+Number(step)
    }
    createPromise(i, time);
  }
}

const onSubmit = event => {
  event.preventDefault();
  const delayValue = delay.value;
  const stepValue = step.value;
  const amountValue = amount.value;
  console.log(delayValue, stepValue, amountValue);
  promiseStep(delayValue, stepValue, amountValue);
}
form.addEventListener('submit',onSubmit)


// count += 1;
//   }, 1000);
// });

//  if (count===5) {
//     clearInterval(intervalID);
//     console.log(`Interval with id ${intervalID} has stopped!`);
//   }

