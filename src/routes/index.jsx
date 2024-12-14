import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import LoginPage from "../loginPage";
//import TopNavBar from "../components/TopNavBar"; // Pastikan file ini ada
//import Dashboard from "../pages/Dashboard"; // Pastikan file ini ada
//import Footer from "../components/Footer"; // Pastikan file ini ada

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <TopNavBar />
        <Dashboard />
        <Footer /> */}
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found!</div>, // Fallback for unknown routes
  },
]);

// Main AppRouter component
const AppRouter = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
