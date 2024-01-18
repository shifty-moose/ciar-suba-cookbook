import { useLoaderData, useNavigate } from "react-router-dom";
import useContentful from "../hooks/useContentful";
import '../styles/RecipeDetails.css';


export async function loader({ params }) {
  const { getSingleReceipe } = useContentful();
  const data = await getSingleReceipe(params.id);
  return data;
}

const ReceipeDetail = () => {
  const receipe = useLoaderData();
  const navigate = useNavigate();
  const { title, method , ingredients, picture, preptimeInMinutes} = receipe;

  return (

    <section className="detail-section">

      <img
        className="recipeImg"
        src={picture.file.url}
        alt="picture of delicious food"
        height="auto"/>



      <button 
        className="home-btn"
        onClick={() => navigate("/")}>
          
      <span className="material-symbols-outlined">
      reply
      </span>
      <span className="material-symbols-outlined">
      home
      </span>

      </button>

      <h2>{title}</h2>


      <div className="recipeInfoContainer">

      <div className="left">


        <div className="detail-ingridients">
          <h3> Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <span className="prep-time-detail"><h4>{preptimeInMinutes} min. ⏱️</h4></span>
        </div>

      </div>

      <div className="right">


        <div className="detail-method">

          <h3>Method:</h3>
            <ol>
              {method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
        </div>

      </div>
      </div>
{/* 
      <button 
        className="home-btn"
        onClick={() => navigate("/")}>
          
      <span className="material-symbols-outlined">
      reply
      </span>
      <span className="material-symbols-outlined">
      home
      </span>

      </button> */}


    </section>
  )
}

export default ReceipeDetail;