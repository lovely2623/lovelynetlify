 
 
 import {createBrowserRouter, RouterProvider} from "react-router-dom";
 import  {Home } from "./Pages/Home";
 import  {About } from "./Pages/About";
 import  {Movies } from "./Pages/Movies";
 import  {Contact, contactData } from "./Pages/Contact";
 import  Applayout from "./Component/Layout/Applayout";
import "./App.css"
import "./Index.css"
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./API/GetApiData";
import { MovieDetails } from "./Component/UI/MovieDetails";
import { getMoviesDetails } from "./API/GetMovieDetails";


 const App = ()=>{



  const router = createBrowserRouter([

{
  path : "/",
  element : <Applayout/>,
  errorElement : <ErrorPage/>,
  children : [

    {
      path: "/",
      element:  <Home/>
    },
    {
      path: "/about",
      element:  <About/>
    },
    {
      path: "/movies",
      element:  <Movies/>,
      loader : getMoviesData,
    },
    {
      path: "/movies/:movieId",
      element:  <MovieDetails/>,
      loader : getMoviesDetails,

    },
    {
      path: "/contact",
      element:  <Contact/>,
      action : contactData,
    },

  ]
},


  ]);




  return <RouterProvider router ={router}/>
}

export default App;