const counterValue = document.querySelector('#counter');
const increaseButton = document.querySelector('#increase-btn');
const decreaseButton = document.querySelector('#decrease-btn');

let count = 0;

function updateCount (value){
    count = count + value;
    counterValue.innerHTML = count;
// increase button
    if(count >= 10){
        increaseButton.setAttribute('disabled', true);
    }
    else{
        increaseButton.removeAttribute('disabled', false);
    }
// decrease button
    if(count <= 0){
        decreaseButton.setAttribute('disabled', true);
    }
    else{
        decreaseButton.removeAttribute('disabled', false);
    }
}

increaseButton.addEventListener('click', ()=>{
    updateCount(1)
    
})

decreaseButton.addEventListener('click', ()=>{
       updateCount(-1)
})