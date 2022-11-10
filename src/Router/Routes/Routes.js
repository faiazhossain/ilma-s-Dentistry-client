import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import SingleService from "../../Pages/Home/SingleService/SingleService";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import UpdateUser from "../../Pages/UpdateUser/UpdateUser";
import PrivateRoute from "./PrivateRoute";

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
          fetch(
            `https://ilmas-dentistry-server.vercel.app/allServices/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: ({ params }) =>
          fetch(
            `https://ilmas-dentistry-server.vercel.app/allServices/${params.id}`
          ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://ilmas-dentistry-server.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
