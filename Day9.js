// 1)Write a program that sorts an array of numbers in ascending and descending order.



let arr = [5, 2, 9, 1, 7, 10, 6];

// Ascending
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Ascending:", arr);

// Descending
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Descending:", arr);


// 2) Write a program to count how many times each element appears in an array.



let arr = [1, 2, 2, 3, 1, 4, 2, 3];

let result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(result);


// 3)Write a program to flatten a nested array (e.g., [1, [2, [3]]] → [1,2,3]).

let arr = [1, [2, [3, 4]], 5];
let result = [];

while (arr.length > 0) {
    let item = arr.shift();

    if (Array.isArray(item)) {
        arr = item.concat(arr);
    } else {
        result.push(item);
    }
}

console.log(result);



// 5)Write a program that finds the intersection of two arrays. 


//using Filter

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let intersection = arr1.filter(item => arr2.includes(item));

console.log("Intersection:", intersection);

//using loop

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let result = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            break; 
        }
    }
}

console.log("Intersection:", result);



// 6)Write a program to split an array into chunks of size n.

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 3;

let chunks = [];

for (let i = 0; i < arr.length; i ++) {                   //error occured
    chunks.push(arr.slice(i, i + n));
}

console.log(chunks);




// 7)Write a program that squares each element of an array using map(). 


let arr = [1, 2, 3, 4, 5];

let squ = arr.map(num => num * num);

console.log("Squared Array:", squ);







