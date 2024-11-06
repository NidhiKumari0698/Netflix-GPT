import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Browse from "./Browse";
import Demo from "./Demo";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/demo",
          element: <Demo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
