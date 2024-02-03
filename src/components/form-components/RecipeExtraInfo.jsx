import React from 'react'

const RecipeExtraInfo = ( { recipe, handleChange, prevStep, nextStep } ) => {

    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    }

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
    <>    
        <form className='formBody'>

            <label>Subheading:
            </label>
            <input type='text' name='subheading' value={recipe.subheading} onChange={handleChange}/>


            <label>Description:
            </label>
            <textarea name='description' value={recipe.description} onChange={handleChange}/>


            <label>Type:
            </label>
            <select name='type' value={recipe.type} onChange={handleChange}>
                <option value=''>Choose One</option>
                <option value='pizza'>Pizza</option>
                <option value='pasta'>Pasta</option>
                <option value='dessert'>Dessert</option>
                <option value='other'>Other</option>
            </select>


            <label>Picture URL:
            </label>
            <input type='text' name='pictureurl' value={recipe.pictureurl} onChange={handleChange}/>


            <label>Prep Time (in minutes):
            </label>
            <input type='number' name='preptimeinminutes' value={recipe.preptimeinminutes} onChange={handleChange}/>


            <div className='buttonsDiv'>
                <button className='prevBtn' onClick={prevPage}>Prev</button>
                <button className='nextBtn' onClick={nextPage}>Next</button>
            </div>


        </form>
    </>

    )
}

export default RecipeExtraInfo