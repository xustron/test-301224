import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import "@fortawesome/fontawesome-free-brands";

import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/global.css";
import Home from "./screens/Home/Home";

createRoot(document.getElementById("XU")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
