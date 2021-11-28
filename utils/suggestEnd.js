// Вычисляет проверочный символ

export function suggestEnd(string) {
  const digitArray = string.split("");
  const weigths = getWeights(digitArray);
  const sum = multiplyAndAdd(digitArray, weigths);
  return getCheckDigit(sum, digitArray);
}

function getCheckDigit(sum, digitArray) {
  const remainder = sum % 11;
  if (remainder !== 10) {
    return remainder;
  } else {
    const newWeights = getWeights(digitArray, 3);
    const newSum = multiplyAndAdd(digitArray, newWeights);
    const newRemainder = newSum % 10;
    return newRemainder !== 10 ? newRemainder : 0;
  }
}

function getWeights(arr, startWith = 1) {
  let counter = startWith;
  const weights = [];
  for (let number of arr) {
    weights.push(counter++);
    if (counter === 11) {
      counter = 1;
    }
  }
  return weights;
}

function multiplyAndAdd(digits, weights) {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i] * weights[i];
  }
  return sum;
}
