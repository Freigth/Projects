var email = document.querySelector('#a-brown-container-form')
var emailbtn = document.querySelector('#submit')
emailbtn.addEventListener('click', function () {
  if (email.checkValidity() == false) {
    alert('Must enter a valid email')
  }
})

const open = false
const hamburger = document.querySelector('#menu-icon')
const close = document.querySelector('#close-icon')
const hamburger_c = document.querySelector('#hamburger')

hamburger.addEventListener('click', function () {
  document.querySelector('#nav-container').classList.toggle('visibility')
})
