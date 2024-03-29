import useContentful from '../hooks/useContentful';
import { useLoaderData, useNavigate } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';
import React, { useState, useEffect, useRef } from 'react';
import { fetchAllRecipes } from '../api';

export function loader() {
  const data = fetchAllRecipes();
  return data;
}
function Home() {
  const receipes = useLoaderData()
  const navigate = useNavigate();

  const ref = useRef(null);
  const scrollToTop = (elementId) => {
    ref.current.setAttribute('style', 'opacity: 0; transition: opacity 0.3s;')

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    setTimeout(() => {
        navigate(`/${elementId}`);
    }, 300);
    ref.current.setAttribute('style', 'opacity: 1')
  };

  return (
    <>
      <section ref={ref}>

        <RecipeCard
        recipes={receipes}
        scrollToTop={scrollToTop}/>

        <RecipeList
        recipes={receipes}
        scrollToTop={scrollToTop} />

      </section>  
    </>
  )
}

export default Home