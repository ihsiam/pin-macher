function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typed = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number === 'C'){
            typed.value = '';
        }
        else if (number === '<'){
            const digits = typed.value.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typed.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = typed.value + number;
        typed.value = newTypedNumber;
    }
});

const pinSuccessMessage = document.getElementById('pin-success');
const pinFailureMessage = document.getElementById('pin-failure');

pinSuccessMessage.style.display = "none";
pinFailureMessage.style.display = "none";

document.getElementById('verify-pin').addEventListener('click', function(){
    const currentPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';

        setTimeout(() => {
            pinSuccessMessage.style.display = 'none';
        }, 3000);
    }
    else{
        pinFailureMessage.style.display = 'block';

        setTimeout(() => {
            pinFailureMessage.style.display = 'none';
        }, 3000);
    }

    document.getElementById('typed-numbers').value= '';
    document.getElementById('display-pin').value = '';

});