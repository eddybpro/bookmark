const chromeBtn = document.querySelector('.chrome-btn');
const fireFoxBtn = document.querySelector('.firefox-btn');
const chromeLink = document.querySelector('.chrome-link')
const fireFoxLink = document.querySelector('.firefox-link');
const lists = document.querySelector('.lists');
const navList = document.querySelectorAll('.nav-list')
const navBtn = document.querySelector('.nav-btn');
const humburger = document.querySelector('.humburger');
const closeBtn = document.querySelector('.close')


humburger.addEventListener('click', ()=>{
    humburger.classList.toggle('close')
    lists.classList.toggle('lists-block')
    navBtn.classList.toggle('nav-btn-block')
    closeBtn.classList.toggle('close')
    
})

closeBtn.addEventListener('click', ()=>{
    humburger.classList.toggle('close')
    lists.classList.toggle('lists-block')
    navBtn.classList.toggle('nav-btn-block')
    closeBtn.classList.toggle('close')
})

navBtn.addEventListener('click', ()=>{
    humburger.classList.toggle('close')
    lists.classList.toggle('lists-block')
    navBtn.classList.toggle('nav-btn-block')
    closeBtn.classList.toggle('close')
})

navList.forEach(element =>{
    element.addEventListener('click', ()=>{
        humburger.classList.toggle('close')
        lists.classList.toggle('lists-block')
        navBtn.classList.toggle('nav-btn-block')
        closeBtn.classList.toggle('close')
    })
})


chromeBtn.addEventListener('click',()=>{
    chromeBtn.style.backgroundColor = 'blue';
    chromeLink.style.color = 'white';
    fireFoxLink.style.color = 'black';
    fireFoxBtn.style.backgroundColor = '#b5b5b5'


})

fireFoxBtn.addEventListener('click',()=>{
    fireFoxBtn.style.backgroundColor = 'blue'
    fireFoxLink.style.color = 'white'
    chromeLink.style.color = 'black'
    chromeBtn.style.backgroundColor = '#b5b5b5'

})










