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
  document.body.classList.add('glitching')
  document.title = 'B̷̻̎̾̋ŗ̶̥̚ů̸͇̜̈́͝n̷̨̠̹̊̚o̶̤̒ ̸̥͔͍́̾̚Ö̸̟̯͚́̓l̴̝͈͛ì̵̪͊̆v̵̡͉͂̏͠e̴̫̟͉̿̋̈́i̶̮̙̥̓̈́r̸͖̥̀a̶̧͍͑́̕ ̵͖̘̯̊-̸̨̯͕͌͒͆ ̵͔̲̆S̵͚͊̔̑ó̷̰̝f̵̼̐̈̚t̸̙͛̕ẁ̷̱a̴̤͖̎̚r̶̪̜̔͝ẻ̸͚͒̆ ̴̮̊́̑Ȇ̸̖̦́̚n̸͎̲̦̾ģ̴̮͙̋̾i̷͖̍̽n̸̲̖̾͋̍e̴͔͑e̵̛̛̖̋r̸̝̹̆͝'
}, 5e3)
