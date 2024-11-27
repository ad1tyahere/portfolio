const toggleButton = document.getElementById('theme-toggle')
const toggleIcon = document.getElementById('toggle-icon')
const body = document.body

toggleButton.addEventListener('click', () => {
  // Toggle dark mode
  body.classList.toggle('dark')

  // Toggle between moon and sun icons
  if (body.classList.contains('dark')) {
    toggleIcon.classList.remove('fa-moon')
    toggleIcon.classList.add('fa-sun')
  } else {
    toggleIcon.classList.remove('fa-sun')
    toggleIcon.classList.add('fa-moon')
  }
})
