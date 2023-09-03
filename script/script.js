  // Function to check if a character is an alphabet
function checkAlphabet() {
    let alphabetResult = document.getElementById('alphabetResult');
    let char = prompt('Enter a single character');

    if (char === '') {
        alert('You did not type any character.');
        checkAlphabet(); // Recursive call to keep the same structure
    } else if (char.length !== 1) {
        alert('You should enter only one character.');
        checkAlphabet(); // Recursive call to keep the same structure
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        alphabetResult.innerText = `${char} is an alphabet.`;
    } else {
        alphabetResult.innerText = `${char} is not an alphabet.`;
    }
}

 // Function to categorize height
 function findHeight() {
    let heightResult = document.getElementById('heightResult');
    let heightInCMS = prompt('What is your height in centimeters?');
    if (heightResult === '') {
        alert('You did not type any character.');
        findHeight(); // Recursive call to keep the same structure
    } else if (isNaN(heightInCMS) || heightInCMS < 0) {
        alert('plese type number');
        findHeight(); // Recursive call to keep the same structure
    }
    else if (heightInCMS < 150) {
        heightResult.innerText = 'You are considered short.';
    } else if (heightInCMS >= 150 && heightInCMS <= 160) {
        heightResult.innerText = 'You have an average height.';
    } else if (heightInCMS > 160 && heightInCMS < 195) {
        heightResult.innerText = 'You have a normal height.';
    } else if (heightInCMS >= 195) {
        heightResult.innerText = 'You are very tall, consider adjusting your height.';
    }
}

//Function to calcluate  factorial
function calculateFactorial() {
    let num = parseInt(prompt('Enter a number'));
    
    if (isNaN(num) || num <= 0) {
        alert('Please enter a valid positive number.');
        num = parseInt(prompt('Enter a number'));
    }else{
        let ans = 1;

        for (let i = num; i > 0; i--) {
            ans *= i;
        }

        let factorialResult = document.getElementById('factorialResult');
        factorialResult.innerText = `The factorial of ${num} is ${ans}`;
    }

    
}

//Function to reverse a number
function reverseNumber() {
    let number = parseInt(prompt('Enter the number'));
    if (isNaN(number) || number <= 0) {
        alert('Please enter a valid positive number.');
        number = parseInt(prompt('Enter a number'));
    }else{
    let originalNumber = number;
    let reversed = 0;

    while (originalNumber !== 0) {
        let lastDigit = originalNumber % 10;
        reversed = reversed * 10 + lastDigit;
        originalNumber = (originalNumber - lastDigit) / 10;
    }

    let numberResult = document.getElementById('numberResult');
    numberResult.innerText = `Original Number: ${number}, Reversed Number: ${reversed}`;
}
}

// let number=parseInt(prompt('enter the number'));
// let fib=[0,1]
// let a=0;
// let b=1;
// for(i=1;i<number;i++){
//     let ans=a+b;
//     fib.push(ans)
//     a=b;
//     b=ans;
// }
// console.log(fib)


//Write a function to generate and return the Fibonacci series up to a given number of terms.
function FibonacciNumber() {
    const numTerms=parseInt(prompt('number of terms you want'));
    let FibonacciResult=document.getElementById('FibonacciResult')
    if (numTerms <= 0 || isNaN(numTerms)) {
        alert("Please enter a valid number of terms.");
        return;
    }
    else{

        let firstNumber = 0;
        let secondNumber = 1;
        let arr=[firstNumber,secondNumber]

        for (let i = 2; i < numTerms; i++) {
            let nextFibonacci = firstNumber + secondNumber;
            arr.push(nextFibonacci)
            firstNumber = secondNumber;
            secondNumber = nextFibonacci;
        }
        FibonacciResult.innerText=arr.join(',')
    }
}
//write a function of given number is prime or not
function primeNumber(){
    const   number=parseInt(prompt('number of terms you want'));
    let primeResult=document.getElementById('primeResult')
    let prime = true; // Assume the number is prime initially
    if (number <= 0 || isNaN(number)) {
        alert("Please enter a valid number of terms.");
        return;
    }
    else if(number<=1){
        prime=false;
    }else{
        for(i=2;i*i<=number;i++){
            if(number %i ===0){
                 prime=false;
            }
        }
    }
    prime?primeResult.innerText=`${number} is 'prime number`:primeResult.innerText=`${number} is  not a prime number`
    
}

//calculaterectangle
function calculaterectangle(){
    let width=parseInt(prompt('width'));
    let rectangleResult=document.getElementById('rectangleResult')
    let rectangle;
    if(width<=0 || isNaN(width)){
        alert('you should enter corect')
        return;
    }else{
        let length=parseInt(prompt('length'));
        if(length<=0 || isNaN(length)){
            alert('you should enter corect');
            return;
        }else{
            rectangle=width*length;
        }
        
    }
    rectangleResult.innerText='rectangle is '+rectangle;
            
}