import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import SingleService from "../../Pages/Home/SingleService/SingleService";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/allServices/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);

export default router;
