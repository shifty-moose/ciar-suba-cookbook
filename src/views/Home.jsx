import useContentful from '../hooks/useContentful';
import { useLoaderData } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';

export function loader() {
  const { getReceipes } = useContentful();
  return getReceipes();
}

function Home() {
  const receipes = useLoaderData();
  
  return (
    <>
      <section>
        <RecipeCard
        recipes={receipes} />

        <RecipeList
        recipes={receipes} />
      </section>  
    </>
  )
}

export default Home
