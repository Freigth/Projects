// checkValidity
var email = document.querySelector('#a-brown-container-form')
var emailbtn = document.querySelector('#submit')
emailbtn.addEventListener('click', function () {
  if (email.checkValidity() == false) {
    alert('Must enter a valid email')
  }
})

var contact_form = document.querySelector('#contact-form')
var contact_submit = document.querySelector('#contact-submit')

contact_submit.addEventListener('click', function () {
  if (contact_form.checkValidity() == false) {
    alert('Please occupy the required fields')
  }
})

// HAMBURGER MENU
const open = false
const hamburger = document.querySelector('#menu-icon')
const close = document.querySelector('#close-icon')
const hamburger_c = document.querySelector('#hamburger')

hamburger.addEventListener('click', function () {
  document.querySelector('#nav-container').classList.toggle('visibility')
})

// close.addEventListener('click', function () {
//   close.setAttribute('src', '/Landing_Page/icon/menu.png')
//   hamburger.style.display = 'flex'
//   close.style.display = 'none'
//   document.querySelector('#nav-container').style.visibility = 'hidden'
// })
