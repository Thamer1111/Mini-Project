import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Bmi from "../pages/Bmi";


const router = createBrowserRouter([

  { path: "/", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/signup", element: <SignUp/> },
    { path: "/bmi", element: <Bmi/> },

]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
