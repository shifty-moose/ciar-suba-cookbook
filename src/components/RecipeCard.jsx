import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import '../view/RecipeCard.css'; 

const RecipeCard = ({ recipe }) => {

    let randomRecipeSelection = [];

    for (let i = 0; i < 3; i++) {
        const randomRecipe = recipe[Math.floor(Math.random() * recipe.length)];
        if (!randomRecipeSelection.includes(randomRecipe)) {
            randomRecipeSelection.push(randomRecipe);
        } else {
            i--;
        };
    };

    const scrollToTop = (elementId) => {

        document.querySelector(".cardSection").setAttribute('style', 'opacity: 0; transition: opacity 0.3s;')
        document.querySelector(".heroImg").setAttribute('style', 'opacity: 0; transition: opacity 0.3s;')

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {

            navigate(`/${elementId}`);
        }, 300);

    };
    
    const navigate = useNavigate();

    return (
        <div className="cardSectionContainer">

        <img src='https://recipes.net/wp-content/uploads/2023/09/italian-dinner-party-1695110507.jpg' alt='' className='heroImg' />

        <div className='cardSection'>
            <h1>Most Popular Recipes Today:</h1>

            <div className='heroCards'>

                {randomRecipeSelection.map(element => (
                    <div 
                        className="card" 
                        key={element.title}
                        onClick={() => {
                            scrollToTop(element.receipeId);}
                        }
                    >
                        <img src={element.picture.file.url} alt={element.title} className="cardImg" />
                        <div className="card-body">

                            <div className="cardTopText">
                                <h3 className="card-title">{element.title}</h3>
                                <h4 className="card-subtitle">{element.subheading}</h4>
                            </div>
                        
                            <div className='cardBottomText'>
                                <h6>Click for Recipe    ▸</h6>
                                <h5 className="card-preptime">{element.preperationTime}25min. ⏱️</h5>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>

    </div>
    );
};

export default RecipeCard;