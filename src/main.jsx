import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/index.jsx"; // Router utama aplikasi
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap untuk gaya
import "./index.css"; // Gaya global aplikasi
import LoginPage from "./loginPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginPage />
    <AppRouter />
  </React.StrictMode>
);
