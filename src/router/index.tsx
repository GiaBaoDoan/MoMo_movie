import { RouteObject } from "react-router-dom";
import { Logins, Register } from "Pages";
import { PATH } from "constant";
import { AuthLayout } from "components/layouts/index";
import Home from "Pages/Home";
import MainLayout from "components/layouts/MainLayout";
import Details from "Pages/Details";
import Checkout from "Pages/Checkout";
import Account from "Pages/Account";
import Paymnent from "components/templates/Paymnent";
import NotFoundPage from "Pages/NotFoundPage";
export const router: RouteObject[] = [
  {
    element: <NotFoundPage />,
    path: "*",
  },
  {
    element: <MainLayout />,
    children: [
      {
        element: <Paymnent />,
        path: PATH.payment,
      },
      {
        element: <Checkout />,
        path: PATH.checkout,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        path: PATH.home,
        element: <Home />,
      },
      {
        path: PATH.detail,
        element: <Details />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Logins />,
      },
      {
        path: PATH.resgister,
        element: <Register />,
      },
    ],
  },
];
