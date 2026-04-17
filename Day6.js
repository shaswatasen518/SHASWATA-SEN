

// 1. Write a program to check whether a given string is a palindrome using built-in string methods. 



// 2. Create a program that counts the number of vowels and consonants in a string. 





// 3. Write a program that reverses a string without using loops (only string methods). 


const original = "Shaswata";
const reversed = original.split('').reverse().join('');

console.log("Reversed:", reversed);




// 4. Use slice() and substring() to extract the middle 3 characters of a given string. 


function middleChars(str) {
    let mid = Math.floor(str.length / 2);
    
    console.log(str.slice(mid - 1, mid + 2));
    console.log(str.substring(mid - 1, mid + 2));
}


middleChars("abcdefg"); 




// 5. Write a program that replaces all spaces in a sentence with -. 



function replaceSpaces(str) {
    return str.replaceAll(" ", "-");
}


console.log(replaceSpaces("I love Webskitters Academy"));





// 6. Write a program that capitalizes the first letter of every word in a sentence.


function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("i love my india"));





// 7. Write a program to check if one string is a substring of another using includes(). 



function checkSubstring(mainStr, subStr) {
    return mainStr.includes(subStr);
}


console.log(checkSubstring("This is fun", "fun")); 




// 8. Write a program to count how many times a specific word occurs in a paragraph using split() 

const countWord = (paragraph, word) => {
    let parts = paragraph.split(word);
    return parts.length - 1;
};

let text = "India is great. I love it because to all Indians, 'India' is not just a name—it is a feeling.";

console.log("Occurrences:", countWord(text, "India"));







