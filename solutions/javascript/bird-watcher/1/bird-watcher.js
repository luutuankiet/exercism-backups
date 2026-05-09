// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) 
  {
    totalCount += birdsPerDay[i] ?? 0;
  }
  return totalCount
  
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // take week args and identify the mapped elements
  let total = 0;
  const daysPerWeek = 7;
  const start = (week-1)*daysPerWeek;
  const end = week*daysPerWeek;
  for (let i = start; i < end; i++)
    {
      total += birdsPerDay[i] ?? 0;
    }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i] += 1;
  }
}



















