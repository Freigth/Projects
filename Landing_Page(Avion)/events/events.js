const open = false
const hamburger = document.querySelector('#menu-icon')
const close = document.querySelector('#close-icon')
const hamburger_c = document.querySelector('#hamburger')

hamburger.addEventListener('click', function () {
  document.querySelector('#nav-container').classList.toggle('visibility')
})
