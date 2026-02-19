
import { createRoot } from "react-dom/client";
console.log("App is initializing...");
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
