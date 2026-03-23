// 1)Write a program that finds the largest and smallest elements in an array. 


// let arr = [12, 45, 7, 23, 56, 3, 19];

// let largest = Math.max(...arr);      //spread opreator 
// let smallest = Math.min(...arr);

// console.log("Largest element:", largest);
// console.log("Smallest element:", smallest);


// 2) Write a program that removes all duplicate elements from an array.


//Using Filter
// let arr = [1, 2, 3, 2, 4, 5, 3, 6];

// let uniqueArray = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// });

// console.log("Array without duplicates:", uniqueArray);


//using Set

// let arr = [1, 2, 3, 2, 4, 5, 3, 6];   

// let uniqueArray = [...new Set(arr)];    //set stores only unique values.

// console.log("Array without duplicates:", uniqueArray);




//  3) Create a program to reverse an array without using reverse() method.



// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);            
// }

// console.log("Reversed Array:", reversed);


// 4) Write a program to find the sum and average of all numbers in an array


// let arr = [30, 50, 80, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// let average = sum / arr.length;

// console.log("Sum:", sum);
// console.log("Average:", average);



// 5) Write a program to find the index of the first occurrence of a given element in an array.

// let arr = [50, 20, 35, 40, 22, 68];
// let element = 22;

// let index = arr.indexOf(element);

// console.log("First occurrence index:", index);


//6) Write a program that joins all elements of an array into a single string separated by commas. 


// let arr = ["I", "am", "a", "Student"];

// let a = arr.join(" ");

// console.log("Result:", a);


//7) Write a program to merge two arrays and remove duplicates. 





// 8) Write a program to find all even numbers from an array using filter(). 


// let arr = [1,2,3,4,5,6,7,8,9,10];

// let evenNumbers = arr.filter(num => num % 2 === 0);  // num is using for current element of the arry

// console.log(evenNumbers);


