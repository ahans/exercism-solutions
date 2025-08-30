/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case undefined:
      return 'You forgot to set the timer.'
    case 0:
      return 'Lasagna is done.'
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layers, averagePreparationTime = 2.0) {
  return layers.length * averagePreparationTime;
}

export function quantities(layers) {
  const [noodles, sauce] = layers.reduce(
    ([noodles, sauce], cur) => [noodles + (cur === 'noodles'), sauce + (cur === 'sauce')],
    [0, 0]);
  return {
    noodles: noodles * 50,
    sauce: sauce * 0.2,
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions) {
  return Object.fromEntries(
    Object.entries(recipe).map(([k, v]) => [k, v / 2.0 * portions])
  );
}