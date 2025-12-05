import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Franzkafka from "./Others/Franzkafka.jsx";
import Todo from "./Others/Todo.jsx";
import Useeffect from "./Useeffect.jsx";
import Timer from "./Others/Timer.jsx";
import App from "./contextAPI/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
