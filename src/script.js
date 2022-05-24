const BTN_SUBMIT = document.getElementById('submit');
const RATINGS = document.querySelectorAll('.card__footer-buttons button');
const CARDS = document.querySelectorAll('.card');

let rate_message = document.querySelector('#rate');
let rate = RATINGS[3].getAttribute('aria-rating'); //Default value

/* Get rate and select the button active */
[...RATINGS].map((item) =>
  item.addEventListener('click', () => {
    rate = item.getAttribute('aria-rating');

    [...RATINGS].map((item) => item.classList.remove('button-active'));
    item.classList.add('button-active');
  })
);

/* Submit rate and hide first card */
BTN_SUBMIT.addEventListener('click', () => {
  rate_message.innerText = `You selected ${rate} out of 5`;

  CARDS[0].classList.add('none');
  CARDS[1].classList.remove('none');

  getBack();
});

/* Back to beginning */
function getBack() {
  setTimeout(() => {
    CARDS[0].classList.remove('none');
    CARDS[1].classList.add('none');
  }, 5000);
}
