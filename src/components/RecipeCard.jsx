import React from 'react';
import '../view/RecipeCard.css'; 

const RecipeCard = ({ recipe }) => {

    console.log(recipe);

    let randomRecipeSelection = [];

    for (let i = 0; i < 3; i++) {
        randomRecipeSelection.push(recipe[Math.floor(Math.random() * recipe.length)]);
    };

    console.log(randomRecipeSelection);


    return (
        <>
        <img src='https://recipes.net/wp-content/uploads/2023/09/italian-dinner-party-1695110507.jpg' alt='' className='heroImg' />

        <div className='cardSection'>
            <h1>Most Popular Recipes Today:</h1>

            <div className='heroCards'>

                {randomRecipeSelection.map(element => (
                    <div 
                        className="card" 
                        key={element.title}
                        onClick={(e) => {
                            console.log(e.target);
                        }}>
                        <img src={element.picture.file.url} alt={element.title} className="cardImg" />
                        <div className="card-body">
                            <h3 className="card-title">{element.title}</h3>
                            <h4 className="card-subtitle">{element.subheading}</h4>
                            <h5 className="card-preptime">{element.preperationTime}25min. ⏱️</h5>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    </>
    );
};

export default RecipeCard;