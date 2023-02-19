// VARIÁVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const go = document.querySelector(".screen1 img")
const btn = document.querySelector("button")

//CALLBACK
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetClick() {
  toggleScreen()
}

function handleEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
// EVENTOS
go.addEventListener('click', toggleScreen)
btn.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnter)