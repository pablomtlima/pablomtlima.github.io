
const respostas = ['D', 'B', 'A', 'A']

const form = document.querySelector('form')
const resultado = document.querySelector('.result')
const p = document.createElement

form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0
    const result = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    result.forEach((result, index) => {
        if (result === respostas[index]) {
            score += 25
        }

    })

    let count = 0
    scrollTo({
        top:0,
        left:0,
        bahavior: 'smooth'
    })

    resultado.classList.remove('d-none')

    let timer = setInterval(() => {
        if (count === score) {
            clearInterval(timer)
        }

        resultado.querySelector('span').textContent = `${count}%`
        count++
    }, 20);

})
