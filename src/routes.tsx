import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import GameForm from "./components/admin/GameForm";
import GameDetailsPageAdmin from "./pages/admin/GameDetailsAdminPage";
import Login from "./components/Login";
import LayoutAdmin from "./pages/LayoutAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user/:user",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
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
        path: "/admin/sellercenter",
        element: <AdminHomePage />,
      },
      { path: "/admin/addgame", element: <GameForm /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/sellercenter/games/:slug",
        element: <GameDetailsPageAdmin />,
      },
    ],
  },
]);

export default router;
