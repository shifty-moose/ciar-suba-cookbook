import React from 'react'

const FormVisualiser = ( { recipe } ) => {
  return (
    <div className='formVisualiser'>

        <div className='visualisedContent'>

        <h1 className='visualisedH1'>Title: {recipe.title}</h1>
        <p>Subheading: {recipe.subheading}</p>
        <p>Description: {recipe.description}</p>
        <p>Type:{recipe.type}</p>
        <p>Preperation Time: {recipe.preptimeinminutes} minutes</p>

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
  )
}

export default FormVisualiser