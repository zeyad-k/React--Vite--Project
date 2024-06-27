import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TranslationComponent from "./components/LanguageComponents/TranslationComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationComponent>
      <App />
    </TranslationComponent>
  </React.StrictMode>
);
