import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeExtraInfo from './RecipeExtraInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeMethod from './RecipeMethod';
import RecipePreview from './RecipePreview';
import '../../styles/RecipeCreator.css';

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

    const [listOfNewIngredients, setListOfNewIngredients] = useState([]);

    const [listOfNewMethods, setListOfNewMethods] = useState([]);


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
                    setRecipe={setRecipe}
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
                    listOfNewMethods={listOfNewMethods}
                    setListOfNewMethods={setListOfNewMethods}
                    setRecipe={setRecipe}
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            );
            break;

        case 4:
            componentToRender = (
                <RecipePreview
                    recipe={recipe}
                    prevStep={prevStep}
                />
            );
            break;

        default:
            componentToRender = <p>Invalid page</p>;
    }

    return (
        <>
            <div className='recipeCreator'>

            <h1>Create a new recipe</h1>
            <div className='leftSide'>
            {componentToRender}
            </div>

            </div>
        </>
    );
};

export default CreateRecipe;
