import ReactDOM from "react-dom/client"; // Updated import
import "./index.css"; // Global styles
import App from "./App"; // Root component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  /* </React.StrictMode> */
);
