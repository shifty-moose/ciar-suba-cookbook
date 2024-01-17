import useContentful from '../hook/useContentful';
import { useLoaderData, useNavigate } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';
import React, { useState, useEffect } from 'react';

export function loader() {
  const { getReceipes } = useContentful();
  return getReceipes();
}

function Home() {
  const receipes = useLoaderData()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    return (
      <div className="loadingDiv">
        <div className="loaderAnimation"></div>
      </div>
    );
  };
  
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
