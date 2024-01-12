import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './hook/useContentful';


function App() {
  const { getReceipes } = useContentful();

  useEffect(()=> { 
    console.log("running")
    const fetchReceipes = async () => {
      const response = await getReceipes();
      console.log(response);
    };
  
    fetchReceipes();  
  }, [])


  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
