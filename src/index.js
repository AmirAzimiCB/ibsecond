import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cover from "./Pages/Cover";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Pages/Home";
<<<<<<< HEAD
import Founders from "./Pages/Founders";
=======
import Founder from "./Pages/Founder";
import "react-round-carousel/src/index.css";
>>>>>>> d0ac6505b06ebf3446bd80313aee3816182c69eb
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
<<<<<<< HEAD
    path: "/founders",
    element: <Founders />,
=======
    path: "/founder",
    element: <Founder />,
>>>>>>> d0ac6505b06ebf3446bd80313aee3816182c69eb
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
