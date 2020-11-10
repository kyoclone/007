'use strict'
const horizon = document.querySelector(".width");
const vertical = document.querySelector('.height');
const img = document.querySelector(".img");
const startBtn = document.querySelector('.startBtn');
const btnDiv = document.querySelector('.btnDiv');
const HIDDEN = 'hidden';
const second = document.querySelector('.second');
const popUp = document.querySelector('.popup');
const popUpBtn = document.querySelector('.popUpBtn');
const popUpMsg = document.querySelector(".popUpMsg");

startBtn.addEventListener('click', playGame);
    
function playGame(){
    startBtn.classList.add(HIDDEN);
    horizon.classList.remove(HIDDEN);
    vertical.classList.remove(HIDDEN);
    img.classList.remove(HIDDEN);
    createItem('jh','이미지/jh.png', 20);
    createItem('sj','이미지/sj.png', 4);
}

window.addEventListener('mousemove', (e)=>{
     second.addEventListener('click', removeFun);
     const x = e.clientX;
     const y = e.clientY;
     horizon.style.top = `${y}px`;
     vertical.style.left = `${x}px`;
     img.style.top = `${y}px`;
     img.style.left = `${x}px`;

});

function createItem(className ,item, num){
    const btnDivRect = btnDiv.getBoundingClientRect();
    const x1 = 0;
    const y1 = 0;
    const x2 = btnDivRect.width-100;
    const y2 = btnDivRect.height;

    for(let i=0; i<num; i++){
        const name = document.createElement('img');
        name.setAttribute('src', item);
        name.setAttribute('class', className);
        const x = randomNumber(x1,x2);
        const y = randomNumber(y1,y2);
        name.style.position = 'absolute';
        name.style.left = `${x}px`;
        name.style.top = `${y}px`;
        second.appendChild(name);
    }
}

function randomNumber(min, max){
    return Math.random() * (max-min);
}

function removeFun(e){
    // const jhArray = document.querySelectorAll('.jh');
    const target = e.target;
    if(target.className === 'sj'){
        popUpGo("금성제(한지석)는 죽이시면 안됩니다!!!!");
    }else if(target.className ==='jh'){
        target.remove();
        const jhArray = document.querySelectorAll('.jh');
        console.log(jhArray.length);
        if(jhArray.length === 0){
            popUpGo("배좇훈 제거 완료^^");
        }
    }
}

function popUpGo(text){
    popUp.classList.remove(HIDDEN);
    popUpMsg.innerText = text;
    popUpBtn.addEventListener('click', initial);
}

function initial(){
    second.innerText ='';
    popUp.classList.add(HIDDEN);
    playGame();
}