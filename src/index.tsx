import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import BookContextProvider from "./context/Bookcontext";

const rootEl = document.getElementById("wrap");
if (!rootEl) throw new Error('Root element "#wrap" not found');

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <BookContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </BookContextProvider>
  </React.StrictMode>
);
