import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
