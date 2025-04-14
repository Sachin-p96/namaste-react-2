import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import About from "./components/About";
import { BrowserRouter, Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocerry = lazy(() => import("./components/Grocerry"));



const AppLayout = () => {
  const [userName,setUserName] =  useState("")
  useEffect(()=>{
    const data = {
      userName:"Sachin"
    }
    console.log(data)
    setUserName(data.userName)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedinUser:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
