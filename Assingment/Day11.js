// 1. Write a program to display the current date in dd-mm-yyyy format. 


const today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();



console.log(dd + "-" + mm + "-" + yyyy);



// 2. Write a program that calculates the number of days left until New Year. 











// 3. Write a program to find the difference in days between two given dates. 









// 4. Write a program that extracts the current hour and prints whether it’s AM or PM. 


const now = new Date();
const hour = now.getHours();

if (hour < 12) {
    console.log("AM");
} else {
    console.log("PM");
}




// 5. Write a program that generates a random number between 1 and 100 using number methods. 


const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);


// 6. Write a program that rounds a decimal number to 2 places using toFixed(). 



const num = 12.34567;

const rounded = Math.floor(num * 100) / 100;
console.log(rounded); 



// 7. Write a program to check if a given number is an integer using a built-in method. 

const n = 10;

console.log(Number.isInteger(n)); 



// 8. Write a program to convert a string "123.45" into a number and round it down using Math.floor(). 


const str = "123.45";

const result = Math.floor(Number(str));
console.log(result); 