import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "./typed.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./pages/Test.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingScreen />,
  },

  {
    path: "/test",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
