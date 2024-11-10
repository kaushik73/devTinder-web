import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { HashRouter } from "react-router-dom";
import { useEffect } from "react";
import AppRoutes from "./routing/AppRoutes";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

function App() {
  useEffect(() => {
    const env = import.meta.env.VITE_API_APP_ENV === "local" ? "Local" : "";
    document.title = `${env} Dev Tinder`;
  }, []);

  return (
    <div data-theme="dark">
      <Provider store={appStore}>
        <HashRouter basename="/">
          <AppRoutes />
        </HashRouter>
      </Provider>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
