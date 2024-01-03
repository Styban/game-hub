import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import GameForm from "./components/admin/GameForm";
import GameDetailsPageAdmin from "./pages/admin/GameDetailsAdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "login", element: <Login /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "sellercenter",
        element: <AdminHomePage />,
      },
      { path: "addgame", element: <GameForm /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "sellercenter/games/:slug", element: <GameDetailsPageAdmin /> },
    ],
  },
]);

export default router;
