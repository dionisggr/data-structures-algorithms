function countSheep(number) {
  if (number === 0) {
    console.log('SLEEP!');
    return;
  };
  console.log(number);
  countSheep(number - 1);
};

function powerCalculator(base, exp) {
  exp--;
  if (exp === 0) {
    return base;
  };
  return base * powerCalculator(base, exp);
};

function reverseString(string) {
  if (string.length === 1) {
    return string;
  };
  return string[string.length - 1]
    + reverseString(string.slice(0, string.length - 1));
};

function triangularNumber(number) {
  if (number === 0) {
    return number;
  };
  return number + triangularNumber(number - 1);
};

function fibonacci(sequence) {
  if (sequence < 2) {
    return sequence;
  };
  return fibonacci(sequence - 1) + fibonacci(sequence - 2);
};

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
};

function maxSum(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + maxSum(array.slice(1));
};

function mergeArraysSorted(arr1, arr2) {
  return arr1.concat(arr2).sort();
};

function removeCharacters(string, remove) {
  if (string.length === 0) {
    return '';
  };
  if (!remove.includes(string[0])) {
    return string[0] + removeCharacters(string.slice(1), remove);
  } else {
    return removeCharacters(string.slice(1), remove);
  }
};

function productOfRest(array) {
  const total = array.reduce((total, val) => total * val, 1);
  return array.map(val => total / val)
}

// Recursion (converts any string to URL-accepted string)
function URLify(string) {
  if (string[0] === ' ') {
    if (string.length === 1) {
      return '%20';
    }
    return '%20' + URLify(string.slice(1));
  }
  if (string.length === 1) {
    return string;
  }
  return string[0] + URLify(string.slice(1));
}