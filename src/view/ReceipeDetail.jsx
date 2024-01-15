import { useLoaderData, useParams } from "react-router-dom";
import useContentful from "../hook/useContentful";

export function loader() {
  const { getSingleReceipe } = useContentful();
  return getSingleReceipe();
}

const ReceipeDetail = () => {
  const { id } = useParams();
  const receipe = useLoaderData(id);
  console.log(receipe)
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
            {ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="detail-method">
        <h3>How to cook</h3>
          <ul>
            {method.map(step => (
              <li>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ReceipeDetail