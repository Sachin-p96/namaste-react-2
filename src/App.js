import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import About from "./components/About";
import { BrowserRouter, Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocerry = lazy(() => import("./components/Grocerry"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/resto/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
