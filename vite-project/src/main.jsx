import React from "react";
import ReactDOM from "react-dom/client";
 import App from './App.jsx'
// import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
