import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import FoodMenu from "../Components/FoodMenu";
import MyProfile from "../pages/MyProfile/MyProfile";
import AddedFoodItem from "../pages/MyProfile/AddedFoodItem/AddedFoodItem";
import AddFoodItem from "../pages/MyProfile/AddFoodItem/AddFoodItem";
import FoodItems from "../pages/FoodItems/FoodItems";
import UpdateFoodItem from "../pages/MyProfile/UpdateFoodItem/UpdateFoodItem";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodPurchasePage from "../pages/FoodPurchasePage/FoodPurchasePage";
import MyCart from "../pages/MyProfile/MyCart/MyCart";
import Blog from "../pages/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/foodItems",
        element: <FoodMenu />,
        loader: () => fetch("http://localhost:3000/foodItems"),
      },

      {
        path: "/myprofile",
        element: <MyProfile />,
      },

      {
        path: "/myprofile/added-food-item",
        element: <AddedFoodItem />,
        loader: () => fetch("http://localhost:3000/foodItems"),
      },
      {
        path: "/myprofile/add-food-item",
        element: <AddFoodItem />,
      },
      {
        path: "/myprofile/update-food-item/:id",
        element: <UpdateFoodItem />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodItems/${params.id}`),
      },
      {
        path: "/food-details/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodItems/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: <FoodPurchasePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foodItems/${params.id}`),
      },
      {
        path: "/myprofile/ordered-food-item",
        element: <MyCart />,
        loader: () => fetch("http://localhost:3000/mycart"),
      },
    ],
  },
]);
export default router;
