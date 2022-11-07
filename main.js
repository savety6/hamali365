const hiddenElements = document.querySelectorAll('.hidden')

const navItems = document.querySelectorAll('.navItem')
//add on click function that add the class 'active' to the clicked navItem and remove it from the others
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItems.forEach((navItem) => {
            navItem.classList.remove('active')
        })
        navItem.classList.add('active')
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
},{threshold: 0})

hiddenElements.forEach((element) => {observer.observe(element)})

const galery = document.querySelectorAll('.grid-item')
galery.forEach((item) => {observer.observe(item)})


//scroll event listener
const header = document.querySelector('.navBar')
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})
