import React from 'react'

const RecipeDetails = ( { recipe, handleChange, prevStep, nextStep } ) => {


    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    };
    
    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
    <>
            <form className='formBody inputsForm'>

                <label>Give your Recipe a Title:</label>
                <input type='text' name='title' value={recipe.title} onChange={handleChange}/>

                <br></br>
                <label>Type:
                </label>
                <select name='type' value={recipe.type} onChange={handleChange}>
                    <option value=''>Choose One</option>
                    <option value='pizza'>Pizza</option>
                    <option value='pasta'>Pasta</option>
                    <option value='dessert'>Dessert</option>
                    <option value='other'>Other</option>
                </select>
                <br></br>

                <label>Prep Time (in minutes):
                </label>
                <input type='number' name='preptimeinminutes' value={recipe.preptimeinminutes} onChange={handleChange}/>

            </form>
            <div className='buttonsDiv'>
                <button className='prevBtn' onClick={prevPage} disabled>Prev</button>
                <button className='nextBtn' onClick={nextPage}>Next</button>
             </div>

    </>

    )
}

export default RecipeDetails