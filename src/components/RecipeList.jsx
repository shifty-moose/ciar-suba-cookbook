import React from 'react';
import '../view/RecipeList.css';

const RecipeList  = ({ recipe }) => {

    return (
    <div className='recipesDiv'>
        <h1>Explore Our Recipes Below:</h1>

        <ul className='listOfRecipes'>

            {recipe.map(element => (
                <li key={element.title}>
                    <div className='recipeListItem'>

                        <div className="topText">

                        <img src={element.picture.file.url} alt={element.title} />

                        <div className="recipeInfo">
                            <h3>{element.title}</h3>
                            <h4>{element.description}</h4>
                        </div>

                        </div>


                        <div className="bottomText">
                            <h5>{element.preperationTime}25min. ⏱️</h5>
                            <h6>Click for Recipe    ▸</h6>
                        </div>
                
                    </div>
                </li>
            ))}

        </ul>
     </div>
    )


};


export default RecipeList;