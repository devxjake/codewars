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

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("12a4"));
console.log(validatePIN("4567"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("45678"));
console.log(validatePIN("123456"));
console.log(validatePIN("234567"));
