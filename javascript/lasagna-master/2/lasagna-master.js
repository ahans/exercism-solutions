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
  const counts = layers.reduce((acc, cur) => {acc[cur] = (acc[cur] ?? 0) + 1; return acc}, {});
  return {
    noodles: (counts.noodles ?? 0) * 50,
    sauce: (counts.sauce ?? 0) * 0.2,
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = {};
  for (const key in recipe) {
    scaledRecipe[key] = recipe[key] / 2.0 * portions;
  }
  return scaledRecipe;
}