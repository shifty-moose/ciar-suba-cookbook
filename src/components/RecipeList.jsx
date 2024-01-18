import React, { useRef } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import '../styles/RecipeList.css';
import lionbannerpng from '../assets/lionbanner.png';
import lowerbanner from '../assets/cookbookbanner.png';
import { filterTypes } from "../constants/index";

const RecipeList = ({ recipes, scrollToTop }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const recipesRef = useRef(null);

    const handleFilterClick = (key, value) => {

        recipesRef.current.classList.add('hide');

        setTimeout(() => {
            setSearchParams(prevParams => {
                if (!value) {
                    prevParams.delete(key);
                } else {
                    prevParams.set(key, value);
                }
                return prevParams;
            })
        }, 350);

        setTimeout(() => {
            recipesRef.current.classList.remove('hide');
        }, 400);
    };

    const filteredRecipes = typeFilter ? recipes.filter(item =>
        item.type === typeFilter) : recipes;
 

    return (

        <div className='recipesDiv'>

            <img src={lionbannerpng} alt="lionbanner" className="lionbanner" />

            <h1>Explore Our Entire Collection Below:</h1>

            <div className='type-filter'>
                {filterTypes.map(item => (
                    <button
                        key={item.filterValue}
                        className='filterButton'
                        onClick={() => handleFilterClick(item.filterKey, item.filterValue)}>
                        {item.label}
                    </button>
                ))}
            </div>

            <ul className='listOfRecipes' ref={recipesRef}>

                {filteredRecipes.map(element => (
                    <li key={element.receipeId}
                        onClick={() => {
                            scrollToTop(element.receipeId);
                        }}>
                        <div className='recipeListItem'>

                            <div className="topText">

                                <img src={element.picture.file.url} alt={element.title} />

                                <div className="recipeInfo">
                                    <h3>{element.title}</h3>
                                    <h4>{element.description}</h4>
                                </div>

                            </div>


                            <div className="bottomText">
                                <h5>{element.preptimeInMinutes}min. ⏱️</h5>
                                <h6>Click for Recipe    ▸</h6>
                            </div>

                        </div>
                    </li>
                ))}

            </ul>

            <img src={lowerbanner} alt="lowerBanner" className="lowerBanner" />

        </div>
    )
};

export default RecipeList;