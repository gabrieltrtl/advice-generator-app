
const adviceBtn = document.querySelector('.advice__btn');

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const adviceId = document.querySelector('.advice-id');
    const adviceText = document.querySelector('.advice__text');
    adviceId.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  })
  .catch(err => {
    console.log('There has been a problem with your fetch operation:', err)
  });
}

fetchAdvice();

adviceBtn.addEventListener('click', fetchAdvice);






