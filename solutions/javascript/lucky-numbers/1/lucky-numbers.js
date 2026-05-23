// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1Number = Number(array1.join(''));
  let array2Number = Number(array2.join(''));
  return array1Number + array2Number;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversedValueString = String(value).split('').reverse().join('');
  return value === Number(reversedValueString);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // branch 1 check raw 
  if (input == null || input === '') {
    return 'Required field';
  } else if (!Number(input)) {
    return "Must be a number besides 0";
  } else {
    return '';
  }
  
}













