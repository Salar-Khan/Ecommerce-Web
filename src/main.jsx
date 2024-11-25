import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { CartProvider } from "./CartContext/CartContext.jsx";
import { HashRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </StrictMode>
);
