https://www.codewars.com/kata/remove-first-and-last-character

// It's pretty straightforward. 
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    const string = str.substr(1).slice(0, -1);
    return string
  };

//   A shorter way is myString.slice(1, -1).
//  This gives both the start and end index to the slice call.

// Other answers:
function removeChar(str){
    return str.substring(1, str.length-1);
   };
   
const removeChar = (str) => str.replace(/^.|.$/g, '');