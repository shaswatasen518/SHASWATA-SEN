// 1. Write a function that takes an unknown number of arguments using the rest parameter and returns their sum. 


// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); 


// 2. Write a function that finds the maximum number from an array using the spread operator. 


// function findMax(arr) {
//     return Math.max(...arr);
// }

// console.log(findMax([10, 20, 5, 40])); 


// 3. Write a program that merges two arrays using the spread operator. 

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let merged = [...arr1, ...arr2];

// console.log(merged); 


// 4. Write a program that copies an object using the spread operator (deep vs shallow copy case). 






// 5. Write a function with rest parameters that calculates the average of any number of inputs. 


// const average = (...nums) => {
//     let total = 0;

//     nums.forEach(n => total += n);

//     return total / nums.length;
// };

// console.log(average(10, 20, 30, 40));



// 6. Write a program that combines multiple objects into one using the spread operator. 


// let obj1 = { a: 1 };
// let obj2 = { b: 2 };
// let obj3 = { c: 3 };

// let combined = { ...obj1, ...obj2, ...obj3 };

// console.log(combined); 





// 7. Write a program to remove duplicate values from an array using spread and Set. 

// let arr = [1, 2, 2, 3, 4, 4, 5];


// let uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);





// 8. Write a program where you pass extra arguments to a function and collect unused ones using rest parameters. 