import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Checkout from "../../Pages/Home/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/Home/NotFound/NotFound";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-2i9prbc5j-paulbishwajit09-gmailcom.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/orders/",
        element: <Orders />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
