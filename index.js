const container = document.querySelector('.box__quote')
const description = document.querySelector('.box__quote-description')

const setQuote = () => fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    document.body.classList.add('loaded')
    response.json()
      .then((object) => {
        const advice = object.slip.advice
        console.log(advice)
        container.innerText = `"${advice}"`
      })
      .catch(e => console.error(e))

    if (!response.ok) {
      description.remove();
    }
  })
  .catch(e => console.error(e))


setQuote()

container.addEventListener('click', () => {
  document.body.classList.remove('loaded')
  setQuote()
})

setTimeout(() => {
  document.querySelectorAll('.js-name').forEach(el => {
    el.textContent = 'bop';
    el.setAttribute('data-text', 'bop');
  })
  document.body.classList.add('glitching')
  document.title = 'bop is short for bruno oliveira de paula';
}, 8e3)
