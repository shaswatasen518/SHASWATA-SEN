// 1. Write a program to create an object car with properties and a method that prints this.brand. 


// let car = {
//     brand: "Toyota",
//     model: "Innova",
    
//     showBrand: function() {
//         console.log("Brand:", this.brand);
//     }
// };

// car.showBrand(); 


// 2. Write a program to demonstrate how this behaves differently in a normal function vs an arrow function. 









// 3. Create an object person with a method greet(), then borrow that method into another object using call(). 


// let a = {
//     name: "Nill",
//     greet: function(age, city) {
//         console.log(`I am, ${this.name} and Age: ${age} and City: ${city}`);
//     }
// };

// let b = {
//     name: "Shaswata"
// };

// a.greet.call(b, 26, "Kolkata");



// 4. Write a program where you pass multiple arguments to a method using apply(). 



// let a = { person: "Shaswata" };
// let b = { person: "Nill" };

// function n(age, town) {
//     console.log(`I am ${this.person} and age ${age} and city ${town}`);
// }


// n.apply(a, [21, "malda"]);
// n.apply(b, [24, "jalpaiguri"]);                  // Passing multiple arguments as an array




// 5. Create a function that uses bind() to permanently bind this to a specific object. 



// let user = {
//     name: "Suman"
// };

// function display() {
//     console.log("User:", this.name);
// }

// let boundFunc = display.bind(user);

// boundFunc(); 


// 6. Write a program where a function defined outside an object is borrowed by multiple objects using call(). 



// let a = { person: "Shaswata" };
// let b = { person: "Nill" };

// function n(age, address) {
//     console.log(`I am ${this.person} and age ${age} and city ${address}`);
// }

// n.call(a, 23, "malda");
// n.call(b, 25, "kolkata");


// 7. Write a program to demonstrate losing this inside a setTimeout() function and fix it using bind(). 








// 8. Create an object method that uses this and test it when assigned to a variable (to show undefined behavior without bind). 


// let hello = {
//     name: "Shaswata",
//     hello1: function() {
//         console.log(`Hello ${this.name}`);
//     },
// };

// let func = hello.hello1;

// let fixed = hello.hello1.bind(hello);

// fixed(); 



