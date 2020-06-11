const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('mul');
const divide = document.getElementById('div');
const add = document.getElementById('plus');
const sub = document.getElementById('minus');
const equalTo = document.getElementById('equalto');
const inputField = document.getElementById('input');
const clearBtn = document.getElementById('clear');
const backSpace = document.getElementById('bksp');

let operatorArray = [];
let valueEnteredArray = [];
let afterValue;
const equalToCalculator = () => {
    afterValue = parseInt(inputField.value);
    valueEnteredArray.push(afterValue);
    if(operatorArray.includes('+')){
    inputField.value = previousValue + afterValue;
    operatorArray = [];
    } else if(operatorArray.includes('-')) {
        inputField.value = previousValue - afterValue;
        operatorArray = [];
    }else if(operatorArray.includes('*')) {
        inputField.value = previousValue * afterValue;
        operatorArray = [];
    }else if(operatorArray.includes('/')) {
        inputField.value = previousValue / afterValue;
        operatorArray = [];
    }
    console.log(valueEnteredArray);
};


zero.addEventListener('click',() => {
    inputField.value = `${inputField.value}`+ 0;
});
one.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 1;
});
two.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 2;
});
three.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 3;
});
four.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 4;
});
five.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 5;
});
six.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 6;
});
seven.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 7;
});
eight.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 8;
});
nine.addEventListener('click',() => {
    inputField.value = `${inputField.value}` + 9;
});

let previousValue;
add.addEventListener('click',() => {
    previousValue = parseInt(inputField.value);
    valueEnteredArray.push(previousValue,'+');
    inputField.value = '';
    operatorArray.push('+');
});
sub.addEventListener('click',() => {
    previousValue = parseInt(inputField.value);
    valueEnteredArray.push(previousValue, '-');
    inputField.value = '';
    operatorArray.push('-');
});
multiply.addEventListener('click',() => {
    previousValue = parseInt(inputField.value);
    valueEnteredArray.push(previousValue, '*');
    inputField.value = '';
    operatorArray.push('*');
});
divide.addEventListener('click',() => {
    previousValue = parseInt(inputField.value);
    valueEnteredArray.push(previousValue, '/');
    inputField.value = '';
    operatorArray.push('/');
});



equalTo.addEventListener('click', equalToCalculator);
clearBtn.addEventListener('click', () => {
    inputField.value = '';
});
backSpace.addEventListener('click', () => {
    if(inputField.value === '') {
        return;
    } else {
    const toTrunc = parseInt(inputField.value) / 10;
    inputField.value = Math.trunc(toTrunc);
}
});