// 1. Write a program that finds the largest of three numbers using only if-else (no Math.max). 

let a = 10, b = 25, c = 15;

if (a >= b && a >= c) {
    console.log("Largest:", a);
} else if (b >= a && b >= c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}



// 2. Use switch to build a simple calculator that can perform addition, subtraction, multiplication, and division. 


let num1 = 100, num2 = 65;
let op = "-"; // +, -, *, /

switch (op) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
        break;
    default:
        console.log("Invalid operator");
}




// 3. Write a program to print all even numbers between 1 and 50 using a for loop. 


for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}




// 4. Write a program to print the multiplication table of a given number using a while loop. 







// 5. Use a do-while loop to repeatedly ask the user for input until they type "exit". 















// 6. Write a program that iterates through an array of numbers and prints only the odd numbers using a for...of loop. 

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let num of arr) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}








// 7. Write a program to iterate through an object and print all key-value pairs using for...in. 


let person = {
    name: "John",
    age: 25,
    city: "Delhi"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}



// 8. Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).

let num = 123;
let sum = 0;

let str = num.toString();

for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
}

console.log("Sum of digits:", sum);
