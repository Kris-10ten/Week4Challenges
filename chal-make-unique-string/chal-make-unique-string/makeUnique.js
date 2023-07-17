/*Write a function to remove all duplicate letters from a provided string. 
The string will only contain lowercase letters between a - z. 
The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

// Write your solution below:

function noDuplicates(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) {
            newStr += str[i] 
        }
    }
    return newStr
}


console.log(noDuplicates('helloworld'))
console.log(noDuplicates('iwanttoclimbamountain'))