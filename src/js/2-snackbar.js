import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const formSnackbar = document.querySelector('.form');
formSnackbar.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = parseInt(
    document.querySelector('input[name="delay"]').value
  );

  const radioCheck = document.querySelector(
    'input[name="state"]:checked'
  ).value;

  function checkValue(value) {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (radioCheck === 'fulfilled') {
          resolve(`Fulfilled promise in ${value}ms`);
        } else {
          reject(`Rejected promise in ${value}ms`);
        }
      }, value);
    });
    return prom;
  }
  checkValue(delayInput)
    .then(res => {
      iziToast.success({ message: res, position: 'topRight' });
    })
    .catch(err => {
      iziToast.error({ message: err, position: 'topRight' });
    });
});
