import Home, { loader as receipesLoader } from './views/Home';
import Layout from './components/Layout.jsx';
import Error from './components/Error.jsx';
import './index.css';
import ReceipeDetail, { loader as singleReceipesLoader } from './views/ReceipeDetail';

import ReactDOM from 'react-dom/client';
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

function App() {
  return (
    <RouterProvider router={router} />
  );
};

const rootTag = document.getElementById('root');
const root = ReactDOM.createRoot(rootTag);
root.render(
    <App />
)
