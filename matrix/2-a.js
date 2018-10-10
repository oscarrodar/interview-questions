function getRepeatedNumbersInArray(numbersInArray) {
  var newArray = [];

  for (var i = 0 ; i < numbersInArray.length ; i++) {
    var currentNumber = numbersInArray[i]; 

    for (var j = i + 1 ; j < numbersInArray.length ; j++) {
      if(currentNumber === array[j]) {
        if(newArray.filter(number => number === currentNumber).length === 0) {
          newArray.push(currentNumber);
        }
      }
    }
  }

  return newArray;
}

array = [1, 2, 3, 4, 5, 1, 5];
getRepeatedNumbersInArray(array);