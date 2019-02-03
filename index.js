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


let current = 0
const colors = [
  '#65c6c4',
  '#3c4f65',
  '#834c69',
  '#ffbe00',
  '#f77754',
  '#EEE',
  '#40514e',
  '#000',
  '#c70039',
  '#74b49b',
  '#044343',
  '#7d7d7d',
  '#b55400',
]

const changer = (event) => {
  if (!event.target.matches('a') && !event.target.matches('.box__quote')) {
    document.body.style = `background-color: ${colors[current]}`
    current++
    if (current >= colors.length) {
      current = 0
    }
  }
}

const trigger = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ? 'touchstart'
  : 'click';

document.body.addEventListener(trigger, changer, true)
