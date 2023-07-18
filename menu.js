const navBar = document.querySelector('.fundo-do-menu')
const allLi = document.querySelectorAll('li')

allLi.forEach( (li, index) => {

    li.addEventListener('click', e =>{
        navBar.querySelector('.active-lit').classList.remove('active-lit')
        li.classList.add('active-lit')

        const indicator = document.querySelector('.indicator')
        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })
})

 console.log(navBar)