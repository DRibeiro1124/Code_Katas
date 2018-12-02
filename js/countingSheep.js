https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript


function countSheeps(arrayOfSheep) {
    sheep = 0
    arrayOfSheep.forEach(function(element) {
      element == true ? sheep++ : ''
    })
    return sheep
  }

//   Other Answers:

//   function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }

//   const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;