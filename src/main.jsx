import { StrictMode } from "react"
// import './index.css'
import { createRoot } from "react-dom/client";
// import LucideTest from "./lucide-icons/lucide-example";
import App from './ShoppingSiteProject/App'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
