import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
