// ==== 1. List Filtering - https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript ====

/* 
    In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => typeof el === "number");
}

// ==== 2. Regex validate PIN code - https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript ====

/*
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN(pin) {
  //return true or false
  const regex = /^(\d{4}|\d{6})$/;
  return regex.test(pin);
}

// ==== 3. Descending Order - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript ====

/*
    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    Examples:
    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
  const sortedString = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(sortedString);

  // return parseInt([...String(n)].sort().reverse().join(""), 10)
}

// ==== 4. Isograms - https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript ====

/* 
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an isogram. 
    Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}
