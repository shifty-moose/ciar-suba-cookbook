import React, { useState } from 'react';
import '../styles/RecipeCreator.css';

const CreateRecipe = () => {

    const [recipe, setRecipe] = useState({
        title: '',
        subheading: '',
        description: '',
        type: '',
        pictureurl: '',
        preptimeinminutes: 0,
        ingredients: [],
        method: []
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const canSubmit = [...Object.values(recipe)].every((value) => value !== '' && value !== 0);

    const submitRecipe = () => {
        canSubmit ? console.log(recipe) : console.log('cannot submit');
    };

    return (
        <div className='recipeCreatorContainer'>


            <h1>Create Recipe</h1>

            <div className='formContainer'>
               
                <form className='formBody'>
                    <label>Recipe Title:
                        <input type='text' name='title' value={recipe.title} onChange={handleChange}/>
                    </label>

                    <label>Subheading:
                        <input type='text' name='subheading' value={recipe.subheading} onChange={handleChange}/>
                    </label>

                    <label>Description:
                        <textarea name='description' value={recipe.description} onChange={handleChange}/>
                    </label>

                    <label>Type:
                        <select name='type' value={recipe.type} onChange={handleChange}>
                            <option value=''>Choose One</option>
                            <option value='pizza'>Pizza</option>
                            <option value='pasta'>Pasta</option>
                            <option value='dessert'>Dessert</option>
                            <option value='other'>Other</option>
                        </select>
                    </label>

                    <label>Picture URL:
                        <input type='text' name='pictureurl' value={recipe.pictureurl} onChange={handleChange}/>
                    </label>

                    <label>Prep Time (in minutes):
                        <input type='number' name='preptimeinminutes' value={recipe.preptimeinminutes} onChange={handleChange}/>
                    </label>

                    <button type='button' onClick={submitRecipe}>Submit</button>
                </form>

                </div>

        </div>
    )
};

export default CreateRecipe;