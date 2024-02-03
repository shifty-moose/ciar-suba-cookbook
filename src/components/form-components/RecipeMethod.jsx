import React, { useState } from 'react'

const RecipeMethod = ( { recipe, handleChange, setRecipe, prevStep, nextStep } ) => {

    const [newMethod, setNewMethod] = useState('');

    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    };

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    };

    const handleNewMethod = (e) => {
        setNewMethod(e.target.value);
    };

    const addMethod = (e) => {
        e.preventDefault();
        setRecipe({ ...recipe, method: [...recipe.method, newMethod] });
        setNewMethod('');
    };

    const testFunc = (e) => {
        e.preventDefault();
        console.log(recipe);
    };

    return (
    <>
        <form className='formBody'>
            <label>Method:
                <input name='ingredients' value={newMethod} onChange={handleNewMethod}/>
            </label>
            <button onClick={addMethod}>Add Method</button>

            <div className='buttonsDiv'>
            <button className='prevBtn' onClick={prevPage}>Prev</button>
            <button className='nextBtn' onClick={nextPage}>Next</button>
            </div>
            
        <button onClick={testFunc} type='submit'>Submit</button>

        </form>
    </>
    )
}


export default RecipeMethod