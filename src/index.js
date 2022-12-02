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
import Founder from "./Pages/Founder";
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
    path: "/founder",
    element: <Founder />,
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
