import React from 'react';
import '../styles/RecipeList.css';
import { useSearchParams } from "react-router-dom";

const RecipeList = ({ recipe }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const handleFilterClick = (key, value) => {
        setSearchParams(prevParams => {
            if(!value) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
            })
        };
    
    const filteredRecipes = typeFilter? recipe.filter(item =>
        item.type === typeFilter) : recipe;

    return (
        <div className='recipesDiv'>
            <h1>Explore Our Recipes Below:</h1>
            <div className='type-filter'>
                <button onClick={() => handleFilterClick("type", "pasta")}>
                    Pasta
                </button>
                <button onClick={() => handleFilterClick("type", "pizza")}>
                    Pizza
                </button>
                <button onClick={() => handleFilterClick("type", "dessert")}>
                    Dessert
                </button>
                <button onClick={() => handleFilterClick("type", null)}>
                    Clear
                </button>
            </div>
            <ul className='listOfRecipes'>
                {filteredRecipes.map(element => (
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