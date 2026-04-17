// 1. Write a program to convert a JavaScript object into a JSON string using JSON.stringify(). 


// let obj = {
//   name: "Rabin",
//   age: 25
// };

// let jsonStr = JSON.stringify(obj);

// console.log(jsonStr);




// 2. Write a program to convert a JSON string into a JavaScript object using JSON.parse(). 


// let jsonStr = '{"name":"Sumit","age":35}';

// let obj = JSON.parse(jsonStr);

// console.log(obj.name); 
// console.log(obj.age);  



// 3. Write a program that stringifies an object with nested properties and then parses it back. 


// let person = {
//     name: "Bakul",
//     address: {
//         city: "Purulia",
//         pin: 723130
//     }
// };

// let jsonStr = JSON.stringify(person);
// let parsedObj = JSON.parse(jsonStr);

// console.log(parsedObj.address.city); 



// 4. Write a program that converts an array of objects into JSON and back to an array. 



// let arr = [
//     { name: "Amit", age: 30 },
//     { name: "Baban", age: 35 }
// ];

// let jsonStr = JSON.stringify(arr);
// let newArr = JSON.parse(jsonStr);

// console.log(newArr);




// 5. Write a program to store a JSON string in localStorage and retrieve it back as an object. 


// let user = { name: "Sita", age: 22 };


// localStorage.setItem("userData", JSON.stringify(user));               // push to localstorage


// let data = JSON.parse(localStorage.getItem("userData"));                               // Retrive the data

// console.log(data.name); 





// 6. Write a program to filter specific properties while stringifying (using replacer function in JSON.stringify). 







// 7. Write a program to pretty-print a JSON string with indentation. 








// 8. Write a program to fetch JSON data from a variable and print values using JSON.parse().

// let data = '{"name":"Shaswata","age":30,"city":"Purulia"}';

// let { name, age, city } = JSON.parse(data);

// console.log(name); 
// console.log(city); 
// console.log(age); 



