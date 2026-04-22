// 1)Write a program to demonstrate how var, let, and const behave differently when declared inside a loop.

//  var
for (var i = 0; i < 2; i++) {}
console.log("var:", i); 
// let
for (let j = 0; j < 2; j++) {}
console.log("let:", j); 

// const
for (const k of [1, 2]) {}
console.log("const:", k); 




// 2) Create a program that shows the difference between function scope of var and block scope of let. 

function value(){
    var a=25;
    console.log(a)
}
value();

{
    let b=63;
    console.log(b);
}


// 3) Write a program to prove that re-declaring a variable with var works, but not with let or const.


var x = 10;
var x = 20;  
console.log("var x =", x);

let y = 30;
const z = 50;

console.log("let y =", y);
console.log("const z =", z);

// 4) Demonstrate a case where a const object can have its properties changed


const person = {
    name: "Shaswata",
    age: 26
};

person.age = 30;
person.city = "Purulia";

console.log(person);

// 5) Write a program showing how hoisting works differently for var vs let. 


console.log(x); 
var x = 145;

console.log(y); 
let y = 110;


// 6) Create a program where accessing a let variable before declaration throws a TDZ (Temporal Dead Zone) 


function showTDZ() {
    
    console.log(value);   
    
    let value = 20;
    
    console.log(value);
}

showTDZ();


// 7) Demonstrate shadowing by declaring a variable inside a block that has the same name as an outer variable (with var and let)



let value = 100;

{
    let value = 200;
    console.log("Inner value:", value);
}

console.log("Outer value:", value);


var data = 50;

{
    var data = 70;
    console.log("Inside block:", data);
}

console.log("Outside block:", data);



// 8) Write a program showing the effect of hoisting in function declarations vs function expressions.

//  function declarations

console.log(x());
function x(){
    return 50
}
 

//  function expressions

console.log(x());
let x=() {
    return 60
}