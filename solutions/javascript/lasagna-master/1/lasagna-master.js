/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime = null) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (remainingTime === null ) {
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime (layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer;
}

export function quantities (layers) {
  const quantityRequired = {
    noodles: 0,
    sauce: 0,
  };
  const mapping = {
    noodles: 50,
    sauce: 0.2
  };
  for (const item of layers) {
    if (mapping[item] !== undefined) {
    quantityRequired[item] += mapping[item];
    };
  }
  return quantityRequired;
}

export function addSecretIngredient (friendsList, myList) {
  myList.push(friendsList.at(-1))
  return;
}

export function scaleRecipe (recipe, servings) {
  // we use const here because we imply this
  // aint going to be reassigned
  const baseRecipe = {...recipe};
  const scaledRecipe = {};
  for (const [item, value] of Object.entries(baseRecipe)) {
    scaledRecipe[item] = value/2 * servings;
  }
  return scaledRecipe;
}

