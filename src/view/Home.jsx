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
    <main>
      Nav
      <section>
        hero
      </section>
      <section>
        super delicious
      </section>
      <section>
        footer
      </section>
    </main>
  )
}

export default Home
