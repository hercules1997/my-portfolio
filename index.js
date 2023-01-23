

//? MUDA O TEMA DE DARK PARA LIGTH
const initLightMode = () => {
    document.querySelector('input[type="checkbox"]').addEventListener('change', () => { document.body.classList.toggle('light-mode') })}


//? MOVIMENTA AS LETRAS 
const initTypingAnimation = () => {

    const span = document.querySelector('#sobre .banner .intro .title span')
    const paragraph = document.querySelector('#sobre .banner .intro .title p')

    const typingAnimation = (element) => {

        if (element == span) {
            element.innerHTML = 'Hércules C. Andrade'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })

        } else {
            element.innerHTML = 'Desenvolvedor Front-End'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 45 * index)
            })
        }
    }

    typingAnimation(span)

    setTimeout(() => typingAnimation(span), 9000)
    setTimeout(() => typingAnimation(paragraph), 3500)
}

initLightMode()
initTypingAnimation()