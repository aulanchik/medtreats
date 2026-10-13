import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/manrope";
import "@fontsource/instrument-serif";
import "@fontsource/instrument-serif/400-italic.css";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
