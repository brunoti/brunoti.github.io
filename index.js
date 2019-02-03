fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    document.body.classList.add('loaded')
    response.json()
      .then((object) => {
        const advice = object.slip.advice
        const container = document.querySelector('.box__quote')
        console.log(advice)
        container.innerText = `"${advice}"`
      })
      .catch(e => console.error(e))
  })
  .catch(e => console.error(e))
