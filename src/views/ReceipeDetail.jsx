import { useLoaderData, useNavigate } from "react-router-dom";
import { getSingleReceipe } from "../hooks/useBackend.jsx";
import '../styles/RecipeDetails.css';


export async function loader({ params }) {
  const data = await getSingleReceipe(params.id);
  return data;
}

const ReceipeDetail = () => {
  const receipe = useLoaderData();
  const navigate = useNavigate();

  let method = [];
  let ingredients = [];    

  console.log(receipe[0])

  const { title, pictureurl, preptimeinminutes} = receipe[0];

  return (

    <section className="detail-section">

      <img
        className="recipeImg"
        src={pictureurl}
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
            {receipe[0].ingredients_arr.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <span className="prep-time-detail"><h4>{preptimeinminutes} min. ⏱️</h4></span>
        </div>

      </div>

      <div className="right">


        <div className="detail-method">

          <h3>Method:</h3>
            <ol>
              {receipe[0].methods_arr.map((step, index) => (
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