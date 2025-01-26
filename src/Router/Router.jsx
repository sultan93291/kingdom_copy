import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import EnterOTP from "../pages/Auth/EnterOTP";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/Auth/SignIn";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import CreateNewPassword from "../pages/Auth/CreateNewPassword";
import ResetOTP from "../pages/Auth/ResetOTP";
import WhatsYourName from "../pages/Auth/WhatsYourName";
import { Match } from "../pages/Match/Match";
import PrivateLayout from "../layout/PrivateLayout";
import Soul from "../pages/Soul/Soul";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/user",
    element: <PrivateLayout />,
    children: [
      {
        path: "/user/match",
        element: <Match />,
      },
      {
        path: "/user/find-your-soul",
        element: <Soul />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "enterOTP",
        element: <EnterOTP />,
      },
      {
        path: "forgetPassword",
        element: <ForgotPassword />,
      },
      {
        path: "createNewPassword",
        element: <CreateNewPassword />,
      },

      {
        path: "resetOTP",
        element: <ResetOTP />,
      },
      {
        path: "whatsYourName",
        element: <WhatsYourName />,
      },
    ],
  },

  {
    path: "/user",
    element: <PrivateLayout />,
    children: [
      {
        path: "/user/match",
        element: <Match />,
      },
      {
        path: "/user/find-your-soul",
        element: <Soul />,
      },
    ],
  },
]);

export default router;
