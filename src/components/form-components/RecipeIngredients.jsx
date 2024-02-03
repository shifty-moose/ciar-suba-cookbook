import React, { useState } from 'react'

const RecipeIngredients = ( { recipe, handleChange, listOfNewIngredients, setListOfNewIngredients, setRecipe, prevStep, nextStep } ) => {

    const [newIngredient, setNewIngredient] = useState('');

    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    };

    const nextPage = (e) => {
        e.preventDefault();
        setRecipe({ ...recipe, ingredients: listOfNewIngredients });
        nextStep();
    };

    const handleNewIngredient = (e) => {
        setNewIngredient(e.target.value);
    };

    const addIngredient = (e) => {
        e.preventDefault();
        setListOfNewIngredients([...listOfNewIngredients, newIngredient]);
        setNewIngredient('');
    };

    const deleteIngredient = (index) => {
        setListOfNewIngredients(listOfNewIngredients.filter((ingredient, i) => i !== index));
    };
    
    return (
    <>
        <form className='formBody'>
            <label>Ingredients:
                <input name='ingredients' value={newIngredient} onChange={handleNewIngredient}/>
            </label>
            <button onClick={addIngredient}>Add Ingredient</button>

            <div className='ingredientList'>
                {listOfNewIngredients.map((ingredient, index) => {
                    return <div className='ingredientItem' key={index}>
                        {ingredient}
                        <button onClick={() => deleteIngredient(index)} className='deleteBtn'>Delete</button>

                        </div>
                })}
            
            </div>

            <div className='buttonsDiv'>
            <button className='prevBtn' onClick={prevPage}>Prev</button>
            <button className='nextBtn' onClick={nextPage}>Next</button>
            </div>

        </form>
    </>
    )
}

export default RecipeIngredients