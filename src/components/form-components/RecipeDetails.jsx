import React from 'react'

const RecipeDetails = ( { recipe, handleChange, nextStep } ) => {

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
    <>
            <form className='formBody'>
                <label>Give your Recipe a Title:</label>
                <input type='text' name='title' value={recipe.title} onChange={handleChange}/>
                <button className='nextBtn' onClick={nextPage}>Next</button>
            </form>
    </>

    )
}

export default RecipeDetails