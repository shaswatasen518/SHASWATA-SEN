

// 1. Write a program to create an array of objects representing students with name and marks, and print only the names of students who scored more than 50. 


// let students = [
//   { name: "Amit", marks: 60 },
//   { name: "Rahul", marks: 45 },
//   { name: "Sita", marks: 75 }
// ];

// let result = students
//   .filter(student => student.marks > 50)
//   .map(student => student.name);

// console.log(result);




// 2. Write a program that sorts an array of objects by a specific property (e.g., age). 



// let people = [
//   { name: "A", age: 30 },
//   { name: "B", age: 20 },
//   { name: "C", age: 25 }
// ];

// people.sort((a, b) => a.age - b.age);

// console.log(people);


// 3. Write a program to find the student with the highest marks from an array of student objects. 



// let students = [
//   { name: "Sumit", marks: 60 },
//   { name: "Bakul", marks: 85 },
//   { name: "Gita", marks: 75 }
// ];

// let topStudent = students[0];

// for (let i = 1; i < students.length; i++) {
//   if (students[i].marks > topStudent.marks) {
//     topStudent = students[i];
//   }
// }

// console.log(topStudent);




// 4. Write a program to group an array of objects by a property (e.g., group employees by department). 


// let employees = [
//     { name: "Amit", department: "HR" },
//     { name: "Rahul", department: "IT" },
//     { name: "Gita", department: "HR" },
//     { name: "Priyatama", department: "Finance" },
//     { name: "mohan", department: "IT" }
// ];

// let grouped = employees.reduce((acc, emp) => {
//     (acc[emp.department] = acc[emp.department] || []).push(emp);
//     return acc;
// }, {});

// console.log(grouped);


// 5. Write a program that finds the average marks of all students in an array of objects. 



// let students = [
//   { name: "Pradip", marks: 60 },
//   { name: "Rabul", marks: 80 },
//   { name: "Mita", marks: 100 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total += students[i].marks;
// }

// let avg = total / students.length;

// console.log(avg);




// 6. Write a program that filters out employees earning less than a certain salary from an array of employee objects.



// let employees = [
//   { name: "A", salary: 20000 },
//   { name: "B", salary: 50000 },
//   { name: "C", salary: 30000 }
// ];

// let filtered = employees.filter(emp => emp.salary >= 30000);

// console.log(filtered);



// 7. Write a program that updates the age of a person in an array of objects, given their name. 



// let people = [
//     { name: "Amit", age: 25 },
//     { name: "Rahul", age: 30 },
//     { name: "Gita", age: 28 }
// ];

// let targetName = "Rahul";
// let newAge = 35;


// for (let person of people) {
//     if (person.name === targetName) {
//         person.age = newAge;
//     }
// }

// console.log(people);











// 8. Write a program that checks if all products in an array of objects are in stock (inStock = true).


// let products = [
//   { name: "Pen", inStock: true },
//   { name: "Book", inStock: true },
//   { name: "Bag", inStock: false }
// ];

// let allAvailable = products.reduce((acc, p) => acc && p.inStock, true);

// console.log(allAvailable);





