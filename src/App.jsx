import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About"; // ১. About পেজ ইম্পোর্ট করা হলো
import Blogs from "./pages/Blogs";
import Bookings from "./pages/Bookings";
import DoctorDetails from "./pages/DoctorDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetails />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about", // ২. About পেজের রাস্তা (Route) যোগ করা হলো
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
