import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import '../view/RecipeList.css';
import lionbannerpng from '../assets/lionbanner.png';
import lowerbanner from '../assets/cookbookbanner.png';

const RecipeList  = ({ recipe }) => {

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

    const navigate = useNavigate();
    const scrollToTop = (elementId) => {

        document.querySelector(".cardSection").setAttribute('style', 'opacity: 0; transition: opacity 0.5s;')
        document.querySelector(".heroImg").setAttribute('style', 'opacity: 0; transition: opacity 0.5s;')

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {

            navigate(`/${elementId}`);
        }, 600);
    };
    

    return (

    <div className='recipesDiv'>

        <img src={lionbannerpng} alt="lionbanner" className="lionbanner" />

        <h1>Explore Our Entire Collection Below:</h1>

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
                <li key={element.title}
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
                            <h5>{element.preperationTime}25min. ⏱️</h5>
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