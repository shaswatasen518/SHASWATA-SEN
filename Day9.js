// 1)Write a program that sorts an array of numbers in ascending and descending order.



// let arr = [5, 2, 9, 1, 7, 3];


// let ascending = [...arr].sort((a, b) => a - b);      // Ascending order ( if result neg- a or result pos-b)
// console.log("Ascending Order:", ascending);


// let descending = [...arr].sort((a, b) => b - a);       // Descending order ( if result neg- b or result pos-a)
// console.log("Descending Order:", descending);



// 2) Write a program to count how many times each element appears in an array.



// let arr = [1, 2, 2, 3, 1, 4, 2, 3];

// let result = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});

// console.log(result);



// 5)Write a program that finds the intersection of two arrays. 


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// let intersection = arr1.filter(element => arr2.includes(element));

// console.log("Intersection:", intersection);



// 6)Write a program to split an array into chunks of size n.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = 3;

// let chunks = [];

// for (let i = 0; i < arr.length; i ++) {                   //error occured
//     chunks.push(arr.slice(i, i + n));
// }

// console.log(chunks);




// 7)Write a program that squares each element of an array using map(). 


// let arr = [1, 2, 3, 4, 5];

// let squ = arr.map(num => num * num);

// console.log("Squared Array:", squ);



