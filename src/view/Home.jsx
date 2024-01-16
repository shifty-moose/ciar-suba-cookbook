import useContentful from '../hook/useContentful';
import { useLoaderData } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';

export function loader() {
  const { getReceipes } = useContentful();
  return getReceipes();
}

function Home() {
  // https://reactrouter.com/en/main/hooks/use-loader-data
  const receipes = useLoaderData()
  console.log(receipes)
  console.log(typeof receipes)

  return (
    <>
      <section>
      </section>
      <section>

        <RecipeCard
        recipe={receipes} />

        <RecipeList
        recipe={receipes} />

      </section>  
    </>
  )
}

export default Home
