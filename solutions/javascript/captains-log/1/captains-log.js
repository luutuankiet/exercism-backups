// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const minValue = 999;
  const maxValue = 10000;
  const value = Math.floor((Math.random() * (maxValue-minValue + 1) ) + minValue);
  return `NCC-${value}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const minValue = 41000;
  const maxValue = 42000;
  const value = (maxValue - minValue) * Math.random() + minValue;
  return value;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const plannets = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const randomIndex = Math.floor(Math.random() * plannets.length);
  return plannets.at(randomIndex);
}
