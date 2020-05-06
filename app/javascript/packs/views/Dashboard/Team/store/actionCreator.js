import * as actionTypes from './actionTypes.js';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredient_name: name
  }
}