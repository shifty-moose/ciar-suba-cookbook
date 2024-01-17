import { useLoaderData } from "react-router-dom";
import useContentful from "../hook/useContentful";
import { useState, useEffect } from 'react';
import '../styles/RecipeDetails.css';


export async function loader({ params }) {
  const { getSingleReceipe } = useContentful();
  const data = await getSingleReceipe(params.id);
  return data;
}

const ReceipeDetail = () => {
  const receipe = useLoaderData();

  const { title, method , ingredients, picture, preperationTime} = receipe;
  return (

    <section className="detail-section">

      <img
      className="recipeImg"
       src={picture.file.url}
       alt="picture of delicious food"
       height="auto"/>

       <div className="detail-explanation">
        <div className="detail-ingridients">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}><span>{ingredient}</span></li>
            ))}
          </ul>
        </div>
        <div className="detail-method">
        <h2>{title} <span className="prep-time-detail">{preperationTime} 25min. ⏱️</span></h2>
        <h3>Method:</h3>
          <ol>
            {method.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ReceipeDetail;