import React from 'react';
import Home, { loader as receipesLoader } from './view/Home.jsx';
import Layout from './components/Layout.jsx';
import Error from './components/Error.jsx';
import './index.css';
import ReceipeDetail, { loader as singleReceipesLoader } from './view/receipeDetail';

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
      errorElement={<Error />}/>
    {/* FOR TEST PURPOSES*/}
    <Route
     path="/:id"
     element={<ReceipeDetail />}
     loader={singleReceipesLoader} 
     errorElement={<Error />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
