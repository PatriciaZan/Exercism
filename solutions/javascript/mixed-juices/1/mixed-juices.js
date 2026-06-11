// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;

    default:
      return 2.5
      break
  }
}
timeToMixJuice('Tropical Island');
timeToMixJuice('Berries & Lime');

  
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;

  while (wedges < wedgesNeeded && count < limes.length) {
    const lime = limes[count]

    if (lime === 'small') wedges += 6;
    else if (lime === 'medium') wedges += 8;
    else wedges += 10;

    count++;
  }
  //console.log(count)
  return count;
}

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const currentJuice = orders.shift();

    const mixT = timeToMixJuice(currentJuice)
    timeLeft -= mixT;
  }
 return orders;
}

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);




