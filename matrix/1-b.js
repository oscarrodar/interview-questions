// Assumption 2 
// Matrix have repeated numbers 
// and 1 of the numbers is missing 

function generateEmptyMatrix(rowSize, columnSize) {
  var matrix = [];
  for (var i = 0; i < rowSize; i++) {
    matrix[i] = [];
    for (var j = 0; j < columnSize; j++) {
      matrix[i][j] = undefined;
    }
  }

  return matrix;
}

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * max + min); 
}

function generateFilledMatrixRandomly(matrixSize, minValue, maxValue) {
  var matrix = [];
  for (var i = 0; i < matrixSize; i++) {
    matrix[i] = [];
    for (var j = 0; j < matrixSize; j++) {
      matrix[i][j] = generateRandomInt(minValue, maxValue);
    }
  }

  return matrix;
}

function orderMatrix(matrix) {
  var newMatrix;

  var rowSize = getRowSize(matrix);
  var columnSize = getColumnSize(matrix);

  newMatrix = generateEmptyMatrix(rowSize, columnSize);

  for (var i = 0 ; i < rowSize ; i++) {
    var orderedRow = matrix[i].sort((a,b) => a-b); 
    newMatrix[i] = orderedRow;
  }

  return newMatrix;
}

function getRowSize(matrix) {
  return matrix.length; 
} 

function getColumnSize(matrix) {
  return matrix[0].length;
}
