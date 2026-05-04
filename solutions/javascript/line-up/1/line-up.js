//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  // check lastOne and lastTwo
  const lastOne = number % 10;
  const lastTwo = number % 100;
  let  suffix; 
  const teenSuffix = [11,12,13];
  const suffixByLastDigit = {1: 'st', 2:'nd', 3:'rd'};
  if (teenSuffix.includes(lastTwo)) {
    suffix = 'th';
  } else {
    suffix = suffixByLastDigit[lastOne] ?? 'th';
  }
  
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};

