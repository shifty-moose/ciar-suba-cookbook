import Home, { loader as receipesLoader } from './views/Home.jsx';
import Layout from './components/Layout.jsx';
import Error from './components/Error.jsx';
import ReceipeDetail,
 { loader as singleReceipesLoader }
  from './views/ReceipeDetail.jsx';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route 
      index 
      element={<Home />}
      loader={receipesLoader} 
      errorElement={<Error />}
    />
    <Route
     path="/:id"
     element={<ReceipeDetail />}
     loader={singleReceipesLoader} 
     errorElement={<Error />}
    />
  </Route>

));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
};