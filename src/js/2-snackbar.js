import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const formSnackbar = document.querySelector('.form');
formSnackbar.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = parseInt(document.querySelector('.js-input-delay').value);
  const radioCheck = document.querySelector(
    'input[name="state"]:checked'
  ).value;
  function checkValue(value) {
    return new Promise((resolve, reject) => {
      if (radioCheck === 'rejected') {
        return setTimeout(() => reject(), delayInput);
      }
      setTimeout(() => resolve(), delayInput);
    });
  }
  checkValue(delayInput)
    .then(response => {
      iziToast.success({
        icon: '  ',
        iconText: '✅',
        message: ` Fulfilled promise in ${delayInput}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        icon: '  ',
        iconText: '❌',
        message: ` Rejected promise in ${delayInput}ms`,
        position: 'topRight',
      });
    });
});
