// 1.Write a named function that checks whether a string is a palindrome or not. 


// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("madam"));              
// console.log(isPalindrome("hello"));           



// 2. Create an arrow function that returns the factorial of a given number. 

// const factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };


// console.log(factorial(7)); 

// 3. Write an anonymous function that sorts an array of numbers in ascending order. 


// let numbers = [5, 2, 9, 1, 7];

// numbers.sort((a, b) => a - b);

// console.log(numbers); 



// 4. Create a higher-order function that takes another function as input and executes it 3 times. 


// const repeat = (fn) => {
//     for (let i = 0; i < 3; i++) {
//         fn();
//     }
// };

// repeat(() => console.log("Shaswata"));




// 5. Write a program where a function returns another function that adds a specific number to its argument (closure). 

// let functions = [
//     function() { console.log("a"); },
//     function() { console.log("b"); },
//     function() { console.log("c"); }
// ];

// functions.forEach(fn => fn());




// 6. Demonstrate first-class functions by storing multiple functions in an array and calling them one by one. 


// function add(a, b) {
//     console.log( a + b);
// }

// function multiply(a, b) {
//     console.log( a * b);
// }

// function subtract(a, b) {
//     console.log( a - b);
// }


// let operations = [add, multiply, subtract];                // Store functions in an array


// for (let i = 0; i < operations.length; i++) {             // Call each function with arguments
//     operations[i](10, 5);
// }





// 7. Write a function that takes two numbers and a callback function, and applies the callback to those numbers (e.g., addition, subtraction). 


// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// console.log(calculate(20, 5, (x, y) => x + y));                            // addition
// console.log(calculate(60, 5, (x, y) => x - y));                           // subtraction




// 8. Create a program where you use a default parameter to calculate compound interest (default interest rate if not provided). 

// const compoundInterest = (p, t, r = 5) => {
//     return p * Math.pow((1 + r / 100), t);
// };


// console.log(compoundInterest(1000, 2));
// console.log(compoundInterest(1000, 2, 10));




