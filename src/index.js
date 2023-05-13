import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Html from "./Pages/Html";
import Css from "./Pages/Css";
import JavaScript from "./Pages/Javascript";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <h1>SORRY!!!!!</h1> },
  { path: "/html", element: <Html /> },
  { path: "/css", element: <Css /> },
  { path: "/javascript", element: <JavaScript /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();