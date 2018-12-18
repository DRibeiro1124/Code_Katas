https://www.codewars.com/kata/simple-fun-number-1-seats-in-theater

function seatsInTheater(a, b, c, d) {
    return (a - c + 1) * (b - d);
  }

//   Other solutions:

// Gus Kemenyfy:
function seatsInTheater(nCols, nRows, col, row) {
  
    var columnsToTheLeft = nCols - col + 1;
    var rowsBehind = nRows - row ;
    return answer = columnsToTheLeft * rowsBehind;
  }

  