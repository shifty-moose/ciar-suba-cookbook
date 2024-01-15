import useContentful from '../hook/useContentful';
import { useLoaderData } from "react-router-dom";

export function loader() {
  const { getReceipes } = useContentful();
  return getReceipes();
}

function Home() {
  // https://reactrouter.com/en/main/hooks/use-loader-data
  const receipes = useLoaderData()
  console.log(receipes)

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
