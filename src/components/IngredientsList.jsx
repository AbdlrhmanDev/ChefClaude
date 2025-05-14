import React from 'react'

const IngredientsList = ({ingredients, gitRecipe}) => {

  return (
    <section>
            <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
            {ingredients.length > 1 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={gitRecipe}>Get a recipe</button>
            </div>}
        </section>
  )
}

export default IngredientsList