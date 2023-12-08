import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import Sellerdashboard from "./components/admin/Sellerdashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{ path: "sellercenter", element: <Sellerdashboard /> }],
  },
]);

export default router;
