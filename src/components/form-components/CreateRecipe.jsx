import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeExtraInfo from './RecipeExtraInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeMethod from './RecipeMethod';
import FormVisualiser from './FormVisualiser';
import '../../styles/RecipeCreator.css';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        subheading: '',
        description: '',
        type: '',
        pictureurl: '',
        preptimeinminutes: '',
        ingredients: [],
        method: []
    });

    const [listOfNewIngredients, setListOfNewIngredients] = useState([]);


    const [page, setPage] = useState(0);

    const prevStep = () => {
        setPage(page - 1);
    };

    const nextStep = () => {
        setPage(page + 1);
    };

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    let componentToRender;

    switch (page) {
        case 0:
            componentToRender = (
                <RecipeDetails
                    recipe={recipe}
                    handleChange={handleChange}
                    nextStep={nextStep}
                />
            );
            break;

        case 1:
            componentToRender = (
                <RecipeExtraInfo
                    recipe={recipe}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
            break;

        case 2:
            componentToRender = (
                <RecipeIngredients
                    recipe={recipe}
                    handleChange={handleChange}
                    listOfNewIngredients={listOfNewIngredients}
                    setListOfNewIngredients={setListOfNewIngredients}
                    setRecipe={setRecipe}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
            break;

        case 3:
            componentToRender = (
                <RecipeMethod
                    recipe={recipe}
                    handleChange={handleChange}
                    setRecipe={setRecipe}
                    prevStep={prevStep}
                />
            );
            break;

        default:
            componentToRender = <p>Invalid page</p>;
    }

    return (
        <>
            <h1>Hellooo</h1>

            <div className='recipeCreator'>

            <div className='leftSide'>
            {componentToRender}
            </div>
{/* 
            <FormVisualiser
                recipe={recipe}
            /> */}

            </div>
        </>
    );
};

export default CreateRecipe;
