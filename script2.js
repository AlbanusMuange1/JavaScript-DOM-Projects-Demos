// Modal 

// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event Listeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
})

// Stylying for Media 
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}