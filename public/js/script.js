const hamburgerEl = document.querySelector(".hamburger");
const menuEl = document.querySelector('.menu')

hamburgerEl.addEventListener('click', () => {
   menuEl.classList.toggle('show__menu')
   
})


// DATE
const dateEl = document.querySelector('.date')
const currentDate = new Date()
dateEl.textContent = currentDate.getFullYear()


