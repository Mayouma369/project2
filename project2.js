function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString);

function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

const exampleString = "Hello, world!";
const characterCount = countCharacters(exampleString);
console.log(characterCount);

function capitalizeFirstLetter(sentence) {
  let capitalizedSentence = "";
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      capitalizedSentence += words[i][0].toUpperCase() + words[i].slice(1);
    }

    if (i < words.length - 1) {
      capitalizedSentence += " ";
    }
  }

  return capitalizedSentence;
}

const exampleSentence = "hello world! this is a test.";
const capitalized = capitalizeFirstLetter(exampleSentence);
console.log(capitalized);

function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [3, 5, 1, 8, 2];
console.log(findMax(numbers));

function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin(numbers));

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

function filterArray(arr, condition) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-1));

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11));
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(2));

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
  }

  return fibSequence;
}

console.log(generateFibonacci(5));
console.log(generateFibonacci(10));
console.log(generateFibonacci(1));
console.log(generateFibonacci(0));
