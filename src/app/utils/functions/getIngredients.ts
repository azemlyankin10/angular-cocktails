import { Cocktail } from 'src/app/interfaces/cocktail-result';

export const getIngredients = (cardData: Cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cardData[`strIngredient${i}`];
        ingredient && ingredients.push(ingredient);
    }

    return ingredients;
};
