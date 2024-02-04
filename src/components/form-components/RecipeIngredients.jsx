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
        e.preventDefault();
        setNewIngredient(e.target.value);
    };

    const addIngredient = (e) => {
        e.preventDefault();
        setListOfNewIngredients([...listOfNewIngredients, newIngredient]);
        setNewIngredient('');
    };

    const deleteIngredient = (e, index) => {
        e.preventDefault();
        setListOfNewIngredients(listOfNewIngredients.filter((ingredient, i) => i !== index));
    };
    
    return (
    <>
        <form className='formBody'>
            <div className='searchBarContainer'>
            <label>Add your Ingredients:
            </label>
            <div className='searchBar'>
                <input name='ingredients' value={newIngredient} onChange={handleNewIngredient} />
                <button onClick={addIngredient}>+</button>
            </div>
            </div>

            <div className='ingredientList'>
                {listOfNewIngredients.map((ingredient, index) => {
                    return <div className='ingredientItem' key={index}>
                        {ingredient}
                        <button onClick={() => deleteIngredient(event, index)} className='deleteBtn'><span className="material-symbols-outlined">
                        delete
                        </span></button>

                        </div>
                })}
            
            </div>
        </form>
        <div className='buttonsDiv'>
                <button className='prevBtn' onClick={prevPage}>Prev</button>
                <button className='nextBtn' onClick={nextPage}>Next</button>
        </div>

    </>
    )
}

export default RecipeIngredients