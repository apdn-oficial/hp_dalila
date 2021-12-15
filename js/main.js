let hpFill = document.querySelector('.hpFill'),
stamFill = document.querySelector('.stamFill'),
hpP = document.querySelector('.hpPlus'),
hpM = document.querySelector('.hpMinus'),
stamP = document.querySelector('.stamPlus'),
stamM = document.querySelector('.stamMinus'),
hpValEl = document.querySelector('.hpVal'),
stamValEl = document.querySelector('.stamVal');

const hpVal =  parseInt(hpValEl.textContent, 10);
const stamVal = parseInt(stamValEl.textContent, 10);
// console.log(hpVal);


function hp(){
    handler = parseInt(hpValEl.textContent, 10);
    if(this==hpM){
        p = handler-1;
    }
    if(this==hpP){
        p = handler+1;
    }
    s = (p/hpVal)*100 + '%';
    hpFill.style.width = s;
    hpValEl.innerHTML = p + '/' + hpVal;
}
function stam(){
    handler = parseInt(stamValEl.textContent, 10);
    if(this==stamM){
        p = handler-1;
    }
    if(this==stamP){
        p = handler+1;
    }
    s = (p/stamVal)*100 + '%';
    stamFill.style.width = s;
    stamValEl.innerHTML = p + '/' + stamVal;
}

hpM.addEventListener('click', hp);
hpP.addEventListener('click', hp);
stamM.addEventListener('click', stam);
stamP.addEventListener('click', stam);