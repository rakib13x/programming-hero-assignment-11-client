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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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

        loader: () =>
          fetch(
            "https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems"
          ),
      },

      {
        path: "/myprofile",
        element: <MyProfile />,
      },

      {
        path: "/myprofile/added-food-item",
        element: (
          <PrivateRoute>
            <AddedFoodItem />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems"
          ),
      },
      {
        path: "/myprofile/add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile/update-food-item/:id",
        element: (
          <PrivateRoute>
            <UpdateFoodItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems/${params.id}`
          ),
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems/${params.id}`
          ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchasePage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems/${params.id}`
          ),
      },
      {
        path: "/myprofile/ordered-food-item",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/mycart"
          ),
      },
    ],
  },
]);
export default router;
