// Assumption 1 
// Matrix has no repeated numbers 
// and 1 of the numbers is missing 

function generateFilledMatrixOrderAsc(size) {
  var counter = 0;
  var matrix = [];
  for (var i = 0; i < size; i++) {
    matrix[i] = [];
    for (var j = 0; j < size; j++) {
      counter += 1;
      matrix[i][j] = counter;
    }
  }

  return matrix;
}

function getRowSize(matrix) {
  return matrix.length; 
} 

function getColumnSize(matrix) {
  return matrix[0].length;
}


var matrix = generateFilledMatrixOrderAsc(3, 5);

matrix[1][2] = 0; 

function getSupposedMatrixValue(matrix){
  counter = 0;
  var size = matrix.length; 
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      counter += 1;
    }
  }

  return (counter * ( counter + 1 )) / 2; 
}

function getActualMatrixValue(matrix){
  counter = 0;
  var size = matrix.length; 
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      counter += matrix[i][j];
    }
  }

  return counter; 
}

function getMissingValue(matrix) {
  return getSupposedMatrixValue(matrix) - getActualMatrixValue(matrix);
}

console.log(getMissingValue(matrix));