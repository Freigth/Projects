function getParameter(paramName) {
  let parameter = new URLSearchParams(window.location.search)
  return parameter.get(paramName)
}

document.querySelector('#name').innerHTML = getParameter('contact-name')
