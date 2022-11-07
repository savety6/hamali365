const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
},{threshold: 1})


//scroll event listener
const header = document.querySelector('.navBar')
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})

hiddenElements.forEach((element) => {observer.observe(element)})