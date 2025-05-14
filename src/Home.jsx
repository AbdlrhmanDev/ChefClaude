import React, { useState } from 'react'
import './Home.css'
import IngredientsList from './components/IngredientsList'
import ClaudeRecipe from './components/ClaudeRecipe'
import { getRecipe } from './api'



function Home() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    const addIngredient = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newIngredient = formData.get('ingredient');
        if (newIngredient && newIngredient.trim() !== '') {
            setIngredients((prev) => [...prev, newIngredient.trim()]);
            e.target.reset();
        }
    };

    const gitRecipe = async () => {
       const generatedRecipe = await getRecipe(ingredients);
       setRecipeShown(generatedRecipe);
    }


    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form" aria-label="Add ingredient form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    autoComplete="off"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <section>
                    <IngredientsList ingredients={ingredients}
                     gitRecipe={gitRecipe} />
                  
                </section>
            )}

            {recipeShown &&<ClaudeRecipe recipe={recipeShown} />}
        </main>
    );
}

export default Home; 