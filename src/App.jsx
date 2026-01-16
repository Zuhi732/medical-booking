import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
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
      { path: "/", element: <Home /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/doctors/:id", element: <DoctorDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
