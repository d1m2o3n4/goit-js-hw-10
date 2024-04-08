import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const blockContainer = document.querySelector('.timer');
const inputFormEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let userSelectDate;
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      return iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    }

    startBtn.disabled = false;
    userSelectDate = selectedDates[0];
  },
};

flatpickr(inputFormEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    const diff = userSelectDate - Date.now();
    if (diff <= 0) {
      clearInterval(intervalId);
      return iziToast.success({
        title: 'Countdown Finished',
        message: 'Timer has ended!',
        position: 'topRight',
      });
    }
    const { days, hours, minutes, seconds } = convertMs(diff);
    blockContainer.querySelector('.js-days').textContent = addZero(days);
    blockContainer.querySelector('.js-hours').textContent = addZero(hours);
    blockContainer.querySelector('.js-minutes').textContent = addZero(minutes);
    blockContainer.querySelector('.js-seconds').textContent = addZero(seconds);
    function addZero(value) {
      return String(value).padStart(2, '0');
    }
  }, 1000);
  startBtn.disabled = true;
  inputFormEl.disabled = true;
});
