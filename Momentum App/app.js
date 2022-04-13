// USER
let userName = document.querySelector('#text')
let greetings = document.querySelector('#greetings')

// document.body.addEventListener('click', function () {
//   let userFirstLetter = userName.textContent[0].toUpperCase()
//   let restOftext = userName.textContent
//     .slice(1, userName.textContent.value)
//     .toLowerCase()
//   let fullName = `${userFirstLetter}${restOftext}`
//   userName.textContent = fullName
// })

userName.addEventListener('click', function () {
  userName.textContent = ''
})

userName.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let userFirstLetter = userName.textContent[0].toUpperCase()
    let restOftext = userName.textContent
      .slice(1, userName.textContent.value)
      .toLowerCase()
    let fullName = `${userFirstLetter}${restOftext}`
    userName.textContent = fullName
    localStorage.setItem('userName', event.target.innerText)
    userName.blur()
  }
})

// USER END

// TIME START
let time = document.querySelector('#time')
function showTime() {
  let date = new Date(),
    hours = date.getHours(),
    mins = date.getMinutes()

  // AM or PM
  let amPm = hours >= 12 ? 'PM' : 'AM'

  // 12 HOUR FORMAT
  hours = hours % 12 || 12

  time.innerHTML = `${hours}:${addZero(mins)}`

  setTimeout(showTime, 1000)
}

showTime()

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// TIME END

// QUOTES START
let quotesRandom = document.querySelector('#quotes')
function rand() {
  let random = Math.floor(Math.random() * quotes.length)
  setTimeout(rand, 6000)
  if (quotes > quotes.length) {
    return quotes
  } else {
    quotesRandom.classList.add('opacity')
    quotesRandom.innerHTML = quotes[random]
    setTimeout(function () {
      quotesRandom.style.transition = 'opacity 1s'
      quotesRandom.classList.remove('opacity')
    }, 5000)
  }
}
rand()

// QUOTES END

// BACKGROUND
let backgroundRandom = document.querySelector('body')
let arr = []
function randBg() {
  let arrlast = arr[arr.length - 1]
  let random = Math.floor(Math.random() * 13) + 1
  let randomizer = `url(images/bg${random}.jpg)`
  setTimeout(randBg, 40000)
  arr.push(randomizer)
  if (arr.includes(arrlast)) {
    backgroundRandom.style.backgroundImage = randomizer
  } else {
    return arr
  }
}

randBg()
// BACKGROUND END

// GREETINGS
function greet() {
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    greetings.textContent = 'Good morning,'
  } else if (curHr < 18) {
    greetings.textContent = 'Good afternoon,'
  } else {
    greetings.textContent = 'Good evening,'
  }
}

greet()
// GREETINGS END

// TODO
let todo = document.querySelector('#toDo')
let todoForm = document.querySelector('#main-todo')
let getTodo = document.querySelector('#getTodo')
let todoInput = document.querySelector('#todo-text')
let addTodo = document.querySelector('#add')
let clear = document.querySelector('#clear')
let todoContainer = document.querySelector('#toDo-container')
let arrTodo = []

todo.addEventListener('click', function () {
  todoContainer.classList.toggle('display')
})

addTodo.addEventListener('click', function () {
  if (getTodo.childElementCount > 7) {
    alert('Todo have reach the limit. Delete some')
  } else {
    let list = document.createElement('li')
    list.textContent = todoInput.value
    // STILL FIXING THE LOCAL STORAGE
    // arrTodo.push(todoInput.value)
    // localStorage.setItem('todos', JSON.stringify(arrTodo))
    todoInput.value = ''
  }
})

todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    if (getTodo.childElementCount > 7) {
      alert('Todo have reach the limit. Delete some')
    } else {
      let list = document.createElement('li')
      list.textContent = todoInput.value
      getTodo.append(list)
      // arrTodo.push(todoInput.value)
      // localStorage.setItem('todos-e', JSON.stringify(arrTodo))
      todoInput.value = ''
    }
  }
})

clear.addEventListener('click', function () {
  if (getTodo.childElementCount < 1) {
    alert("No more Todo's. Add some")
  } else {
    getTodo.removeChild(getTodo.lastElementChild)
  }
})

// TODO END

// ADD FOCUS
let addFocus = document.querySelector('#addFocus')
let getFocus = document.querySelector('#getFocus')
addFocus.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    getFocus.innerHTML = addFocus.value
    localStorage.setItem('getFocus', addFocus.value)
    addFocus.blur()
    addFocus.value = ''
  }
})
// ADD FOCUS END

// ADD QUOTES
let addQContainer = document.querySelector('#addQuotes-container')
let quoteBtn = document.querySelector('#addQuote-btn')
let quoteInput = document.querySelector('#addQuotes')
let addQbtn = document.querySelector('#addQ-btn')

quoteBtn.addEventListener('click', function () {
  addQContainer.classList.toggle('display')
})

addQbtn.addEventListener('click', function () {
  quotes.push(quoteInput.value)
  quoteInput.blur()
  quoteInput.value = ''
})

quoteInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    quotes.push(quoteInput.value)
    quoteInput.blur()
    quoteInput.value = ''
  }
})

// ADD QUOTES END

// LOCAL STORAGE
function getF() {
  getFocus.textContent = localStorage.getItem('getFocus')
}
getF()

function getName() {
  if (localStorage.getItem('userName') === null) {
    userName.textContent = '[Enter your name]'
  } else {
    userName.textContent = localStorage.getItem('userName')
  }
}
getName()

function getTodos() {}
getTodos()

// LOCAL STORAGE END
