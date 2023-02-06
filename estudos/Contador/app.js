const iniciarContador = document.querySelector('.button-init-counter')
const pararContador = document.querySelector('.button-stop-counter')
const resetarContador = document.querySelector('.button-reset-counter')
const contador = document.querySelector('.counter-container')
let count = 0
let estadoDoContador = 'zerado'


iniciarContador.addEventListener('click', () => {
  if(estadoDoContador === 'zerado' || estadoDoContador === 'parado'){
  estadoDoContador = 'iniciado'
  console.log(estadoDoContador)

  const timer = setInterval(() => {
    count++
    contador.textContent = count
  }, 1000)
 

  pararContador.addEventListener('click', () => {
    estadoDoContador = 'parado'
    console.log(estadoDoContador)
    clearInterval(timer)
  })

  resetarContador.addEventListener('click', () => {
    clearInterval(timer)
    estadoDoContador = 'zerado'
    contador.textContent = 0
    count = 0
    console.log(estadoDoContador)
  })
  }
})

setTimeout