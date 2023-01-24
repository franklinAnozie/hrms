import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home';
import FoodZone from "./pages/food-zone";
import SpecialDeals from "./pages/special-deals";
import MyAccount from "./pages/my-account";
import ContactUs from "./pages/contact-us";
import AdminLogin from "./pages/admin-login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "food-zone",
        element: <FoodZone />
      },
      {
        path: "special-deals",
        element: <SpecialDeals />
      },
      {
        path: "my-account",
        element: <MyAccount />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "admin",
        element: <AdminLogin />
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
