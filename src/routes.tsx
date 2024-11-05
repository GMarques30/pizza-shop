import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/signin";
import { AppLayout } from "./pages/_layout/app";
import { AuthLayout } from "./pages/_layout/auth";
import { SignUp } from "./pages/auth/signup";
import { Orders } from "./pages/app/orders/orders";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/orders",
        element: <Orders/>
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>
      }
    ]
  }
]);