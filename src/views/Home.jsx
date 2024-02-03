import { useLoaderData, useNavigate } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';
import CreateRecipe from "../components/form-components/CreateRecipe";
import React, { useState, useEffect, useRef } from 'react';

import {getReceipes} from '../hooks/useBackend.jsx';


export function loader() {
  return getReceipes();
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
        navigate(`/recipes/${elementId}`);
    }, 300);
    ref.current.setAttribute('style', 'opacity: 1')
  };

  return (
    <>
      <section ref={ref}>

        <CreateRecipe />

        {/* <RecipeCard
        recipes={receipes}
        scrollToTop={scrollToTop}/>

        <RecipeList
        recipes={receipes}
        scrollToTop={scrollToTop} /> */}



      </section>  
    </>
  )
}

export default Home