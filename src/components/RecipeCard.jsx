import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/RecipeCard.css';

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

    const navigate = useNavigate();

    return (
        <>
            <img
                src='https://recipes.net/wp-content/uploads/2023/09/italian-dinner-party-1695110507.jpg'
                alt='A picture of Italian dinner party'
                className='heroImg'
            />

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
        </>
    );
};

export default RecipeCard;