import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Main/LayOut';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Projects from './Component/Projects/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
