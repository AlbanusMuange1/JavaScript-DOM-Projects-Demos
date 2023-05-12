// Variables

const accordion = document.getElementsByClassName('content-container');

for(i = 0; i < accordion.length; i++){

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

}

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