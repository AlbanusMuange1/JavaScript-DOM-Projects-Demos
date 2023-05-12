// Variables

let btn = document.querySelector('#new-quote');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [{
    qoute: '"The best way to find yourself is to lose yourself in the service of others."',
    person: ' Mahatma Gandhi'
},
{
    qoute: '"If you want to live a happy life, tie it to a goal, not to people r things."',
    person: ' Albert Eistein'
},
{
    qoute: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: ' Aristole'
},
{
    qoute: `"Your time is limited, so don't waste it living someone else's life."`,
    person: ` Steve Jobs`
},
{
    qoute: `"Tell me an d I forget. Tech me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franlin`
},
{
    qoute: `"If you look at what you have in life, you'll always have none. If you look at what you don't have in lfe, you'll never have enough."`,
    person: ` Oprah Winfrey`
},
{
    qoute: `"It does matter how slowly you go as long as you do not stop."`,
    person: ` Conducius`
},
{
    qoute:`"Our lives begin to end the day we become silent about things that matter."`,
    person: ` Marin Luther King, Jr`
},
{
    qoute: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: ` Dalal Lama`
},
{
    qoute: `"The journey of a thousand miles begins with one step."`,
    person: ' Lao Tzu'
}
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
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