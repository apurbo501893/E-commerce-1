import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./ui/Header.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cancel from "./pages/Cancel.tsx";
import Cart from "./pages/Cart.tsx";
import Category from "./pages/Category.tsx";
import Favorite from "./pages/Favorite.tsx";
import Notfound from "./pages/Notfound.tsx";
import Orders from "./pages/Orders.tsx";
import Prodect from "./pages/Prodect.tsx";
import Profile from "./pages/Profile.tsx";
import Success from "./pages/Success.tsx";

const Routerlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routerlayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/cancel", element: <Cancel /> },
      { path: "/cart", element: <Cart /> },
      { path: "/category", element: <Category /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/notfound", element: <Notfound /> },
      { path: "/orders", element: <Orders /> },
      { path: "/product", element: <Prodect /> },
      { path: "/profile", element: <Profile /> },
      { path: "/success", element: <Success /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
