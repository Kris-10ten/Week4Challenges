/* In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. 
A valid argument is a number followed by a sequence of letters. 
Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

// Write your code below this line

  function decodeStr(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let num = parseInt(str[0]) // get number
    let newStr = str.slice(1) // get string w/o number   
    let solution = ''

    for (let i=0; i < newStr.length; i++) {
        solution += alphabet[alphabet.indexOf(newStr[i]) + num]
    }
    return solution
}

console.log(decodeStr('2fcjjm'))
console.log(decodeStr('3ce'))
console.log(decodeStr('1a'))