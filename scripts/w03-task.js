/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}

function addNumbers(add1, add2){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers(subtract1, subtract2) {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    return document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);   
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) =>{
    let factorNumber1 = Number(document.querySelector("#factor1").value);
    let factorNumber2 = Number(document.querySelector("#factor2").value);
    return document.querySelector("#product").value = multiply(factorNumber1, factorNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = (dividend, divisor) => {
    let dividendNumber = Number(document.querySelector("#dividend").value);
    let divisorNumber = Number(document.querySelector("#divisor").value);
    return document.querySelector("#quotient").value = divide(dividendNumber, divisorNumber);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
const currentDate = new Date();

const currentYear = currentDate.getFullYear();

document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").innerHTML = numbersArray.join(", ");


/* Output Odds Only Array */

const oddNumbers = numbersArray.filter((number)=> number % 2 !== 0);

document.querySelector("#odds").innerHTML = oddNumbers.join(", ");

/* Output Evens Only Array */

const evenNumbers = numbersArray.filter((number) => number % 2 ===0);

document.querySelector("#evens").innerHTML = evenNumbers.join(", ");

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2);


document.querySelector("#multiplied").innerHTML = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;

