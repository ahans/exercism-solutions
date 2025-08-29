// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const num = Math.floor(1000 + Math.random() * (9999 - 1000));
  return `NCC-${num}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000.0;
  const max = 42000.0;
  return min + Math.random() * (max - min);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const allClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const index = Math.floor(Math.random() * allClasses.length);
  return allClasses[index];
}
