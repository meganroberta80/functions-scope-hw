// 1. What is the difference between a **parameter** and an **argument**?
// A parameter is what you initially input into the function. An argument is what is sent to the function when it's called.


// 2. Within a function, what is the difference between **return** and **console.log**?
// Console.log will print the parameter within the function. Return will return the value that's provided.

// 3. What are the implications of the ability of a function to return a value?
// A function being able to return a value allows the function to save the value that's provided and call it when necessary.ß


// Write a function `checkPalindrome` that accepts a single argument, a string. Later in this assignment we're gonna beef up our palindrome function some. The function should return true if the string is a palindrome, false if not. A _palindrome_ is a word that is the same spelled backwards and forwards, for example: Racecar. Make sure your function will give the correct answer for words with **capital letters**.

// function checkPalindrome(testWord) {
//     const wordLetters = testWord.split("")
//     console.log('WORDLETTERS:', wordLetters)
//     const reversedLetters = wordLetters.reverse()
//     console.log('REVERSEDLETTERS:', reversedLetters)
//     if (wordLetters === reversedLetters) {
//         return(true)
//     }
//     else {
//         return(false)
//     }  
// }

// checkPalindrome('radar')

// ```javascript
// const wordIsPalindrome = checkPalindrome("Radar");

// console.log(wordIsPalindrome);
// => true
// ```

// ```javascript
// const wordIsPaindrome = checkPalindrome("Cat");

// console.log(wordIsPaindrome);
// => false
// ```

// ## 3. Check a List

// Write a function `checkForStudent` that takes 2 parameters, a student's name and an array of students, and checks if the student's name is in the array. If the student's name is included in the array the function should return true. If the name is not included in the array the function should return false. There is more than one way to do this challenge. For extra practice see if you can find at least two ways to solve it.

const students = [
    'Ron', 
    'Sally', 
    'Kyle'
];
// const checkStudent = 'Ron'

function checkForStudent(checkStudent) {
// This for loop goes through the students array and looks for checkStudent
    for (let i = 0; i < students.length; i++) {
// If it finds checkStudent it returns true
        if (students[i] == checkStudent) {
            return true
        }
// Don't want to put false here, bc it'll terminate the loop. 
        else {
        }
    }
    return false
}

console.log(checkForStudent('Jake'))

// ## 4. Sum Array

// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.

let sum = 0
const numArray = [1, 2, 3, 4]

function sumArray() {
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i]
    }
    return sum
}

console.log(sumArray())

// Try solving it using a loop instead of using .reduce().

// Expected result:

// const sum = sumArray([1, 2, 3, 4, 5, 6]);

// console.log(sum);
// => 21