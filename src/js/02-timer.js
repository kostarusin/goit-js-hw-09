import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  secondsValue: document.querySelector('[data-seconds]'),
  minutesValue: document.querySelector('[data-minutes]'),
  hoursValue: document.querySelector('[data-hours]'),
  daysValue: document.querySelector('[data-days]'),
};

refs.startButton.addEventListener('click', onTimerStart);
refs.startButton.disabled = true;

let selectedDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else
    {refs.startButton.disabled = false;
    Notiflix.Notify.success('You choose a right date')}
  },
};

flatpickr(refs.input, options);

function onTimerStart() {
  intervalId = setInterval(() => {
    let currentDate = new Date();
    if (selectedDate > currentDate) {
      refs.startButton.disabled = true;
      

      let dateDelta = selectedDate - currentDate;
      let dateToShow = convertMs(dateDelta);

      let seconds = addLeadingZero(dateToShow.seconds);
      let minutes = addLeadingZero(dateToShow.minutes);
      let hours = addLeadingZero(dateToShow.hours);
      let days = addLeadingZero(dateToShow.days);

      refs.secondsValue.textContent = seconds;
      refs.minutesValue.textContent = minutes;
      refs.hoursValue.textContent = hours;
      refs.daysValue.textContent = days;
    } else {
      clearInterval(intervalId);
      Notiflix.Notify.info('Time is up');
      refs.startButton.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
