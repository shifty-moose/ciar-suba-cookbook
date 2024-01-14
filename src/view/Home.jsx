import { useState, useEffect } from 'react'
import useContentful from '../hook/useContentful';

function Home() {
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
      <section>
        hero
      </section>
      <section>
        super delicious
      </section>  
    </>
  )
}

export default Home
