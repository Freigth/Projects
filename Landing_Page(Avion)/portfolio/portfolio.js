const left = document.querySelector('#left-btn')
const right = document.querySelector('#right-btn')
const display = document.querySelector('#main-container')

const images = document.querySelectorAll('.img-items')

var slide_index = 1
displaySlides(slide_index)

function nextSlide(n) {
  displaySlides((slide_index += n))
}

function currentSlide(n) {
  displaySlides((slide_index = n))
}

function displaySlides(n) {
  var i
  var slides = document.getElementsByClassName('img-items')
  if (n > slides.length) {
    slide_index = 1
  }
  if (n < 1) {
    slide_index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slide_index - 1].style.display = 'block'
}

const hamburger = document.querySelector('#menu-icon')
const close = document.querySelector('#close-icon')
const hamburger_c = document.querySelector('#hamburger')

hamburger.addEventListener('click', function () {
  document.querySelector('#nav-container').classList.toggle('visibility')
})
