

//This was the Old method For Routing  before  V6.4
//in this we have to create a helper Function 

// // const App =()=>{

//   const router= createBrowserRouter(
//     createRoutesFromElements(

//       <Route>
//         <Route  path="/"  element={<Home/> } />
//         <Route  path="/about"  element={<About/> } />
//         <Route  path="/contact"  element={<Contact/> } />
//         <Route  path="/movie"  element={<Movie/> } />
//       </Route>
//     )
//   )


//   return<RouterProvider router={router} />
// }

// export default App;





//This was the New method For Routing  After V6.4

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
