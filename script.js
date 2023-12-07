let p = document.querySelector('p')
let cron 
let number = 0



function buttonStart(){
    cron = setInterval(() => {
        number++
        p.innerHTML = number
   }, 1000);
}


function buttonStop(){
clearInterval(cron)

}

function buttonReset(){
   number = 0
p.innerHTML = 0;

    
}