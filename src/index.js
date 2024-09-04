import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Sign from "./Components/Sign";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <Sign />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
