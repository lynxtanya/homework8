'use strict';

// Створити масив, довжину та елементи якого задає користувач.

const myArr = [];
const myArrNew = [];

let numArrLength = prompt('Add the lenght of array');

for(let i = 0; i < numArrLength; i++) {

    let currentElement = myArr[i];
    currentElement = prompt('Add the numder of ' + (i + 1) + ' array element');   
    myArrNew.push(currentElement);
    
}

console.log(myArrNew);


// Відсортувати масив за зростанням.

myArrNew.sort(function(a, b){return b - a});
console.log(myArrNew);

// Видалити елементи з масиву з 2 по 4 (включно!).

myArrNew.splice(1, 3);
console.log(myArrNew);








