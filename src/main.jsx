import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import Franzkafka from "./Franzkafka.jsx";
import Todo from "./Todo.jsx";
import Useeffect from "./Useeffect.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Timer />
  </StrictMode>
);
