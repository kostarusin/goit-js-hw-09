import Notiflix from 'notiflix';

const refs = {
    form: document.querySelector('.form'),
    delayInput: document.querySelector('input[name="delay"]'),
    stepInput: document.querySelector('input[name="step"]'),
    amountInput: document.querySelector('input[name="amount"]'),
  }

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(refs.delayInput.value);
  const dalayStep = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const delay = firstDelay + i * dalayStep;
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
  }


  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
  
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

