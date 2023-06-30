/* ============================================ */
/*                  COUNT DOWN                  */
/* ============================================ */
let future = new Date('1,01,2025').getTime();

const secondText = document.querySelector('.second');
const minuteText = document.querySelector('.minute');
const hourText = document.querySelector('.hour');
const dayText = document.querySelector('.day');

function getTime() {
  let now = new Date().getTime();
  let distance = future - now;

  //   cong thuc tinh time !IMPORTANCE
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   render ra
  secondText.innerText = seconds;
  minuteText.innerText = minutes;
  hourText.innerText = hours;
  dayText.innerText = days;

  if (distance < 0) {
    clearInterval(count);
  }
}

// goi ham moi 1s
let count = setInterval(() => {
  getTime();
}, 1000);
