import React from 'react';
import '../view/RecipeCard.css'; 

const RecipeCard = ({ recipe }) => {

    console.log(recipe);


    return (
        <>
        <img src='https://recipes.net/wp-content/uploads/2023/09/italian-dinner-party-1695110507.jpg' alt='' className='heroImg' />

        <div className='cardSection'>
            <h1>Popular Recipes Today:</h1>

            <div className='heroCards'>

                {recipe.map(element => (
                    <div className="card" key={element.title}>
                        <img src={element.picture.file.url} alt={element.title} className="cardImg" />
                        <div className="card-body">
                            <h3 className="card-title">{element.title}</h3>
                            <h4 className="card-subtitle">{element.description}A delicious meal for you to eat</h4>
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