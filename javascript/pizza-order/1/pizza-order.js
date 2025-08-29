/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    switch (pizza) {
      case 'Margherita':
        return 7;
      case 'Caprese':
        return 9;
      case 'Formaggio':
        return 10;
    }
  }
  const [firstExtra, ...otherExtras] = extras;
  switch (firstExtra) {
    case 'ExtraSauce':
      return 1 + pizzaPrice(pizza, ...otherExtras);
    case 'ExtraToppings':
      return 2 + pizzaPrice(pizza, ...otherExtras);
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, cur) => acc + pizzaPrice(cur.pizza, ...cur.extras), 0)
}
