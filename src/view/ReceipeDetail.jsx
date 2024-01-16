import { useLoaderData } from "react-router-dom";
import useContentful from "../hook/useContentful";

export async function loader({ params }) {
  const { getSingleReceipe } = useContentful();
  const data = await getSingleReceipe(params.id);
  return data;
}

const ReceipeDetail = () => {
  const receipe = useLoaderData();

  const { title, method , ingredients, picture} = receipe;
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <img
       src={picture.file.url}
       als="picture of delicious food"
       width="500px"
       height="auto"/>
       <div className="detail-explanation">
        <div className="detail-ingridients">
          <h3>Ingridients</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="detail-method">
        <h3>How to cook</h3>
          <ul>
            {method.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ReceipeDetail