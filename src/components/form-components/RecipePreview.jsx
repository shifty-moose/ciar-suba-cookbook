import React from 'react'

const RecipePreview = ( {recipe, prevStep} ) => {

    const submitRecipe = async (e) => {
        e.preventDefault();

        console.log(recipe.method);

        let sanitizedRecipe = {
    
            "title": recipe.title,
            "subheading": recipe.subheading,
            "description": recipe.description,
            "type": recipe.type,
            "pictureurl": recipe.pictureurl,
            "preptimeinminutes": recipe.preptimeinminutes,
            "ingredients": recipe.ingredients,
            "method": recipe.method
        };

        try {
            const response = await fetch('http://localhost:8000/recipes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sanitizedRecipe)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.error(`Error creating your test recipe: ${error}`);
        };
    };

    const parseFoodType = (type) => {
        switch(type) {
            case 'pizza':
                return 'Pizza 🍕';
            case 'pasta':
                return 'Pasta 🍝';
            case 'dessert':
                return 'Dessert 🍨';
            case 'other':
                return 'Other 🍽️';
            default:
                return 'Unknown';
        }
    };

    return (
    <>

    <div className='formBody'>

        <div className='visualisedContent'>

        <h1 className='visualisedH1'>Title: {recipe.title}</h1>
        <p>Subheading: {recipe.subheading}</p>
        <p>Description: {recipe.description}</p>
        <p>Type: {parseFoodType(recipe.type)}</p>
        <p>Preperation Time: {recipe.preptimeinminutes} min. ⏱️</p>

        <ul>
            <p>Ingredients:</p>
            {recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>

        <ol>
            <p>Method:</p>
            {recipe.method.map((step, index) => {
                return <li key={index}>{step}</li>
            })}
        </ol>

        </div>
    </div>


    <div className='buttonsDiv'>
            <button className='prevBtn' onClick={prevStep}>Prev</button>
            <button className='submitBtn' onClick={submitRecipe}>Submit Recipe</button>
    </div>

    </>  
    )
}

export default RecipePreview