import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Doctors from "./Doctors"; // ১. এখানে ইম্পোর্ট করুন (খেয়াল রাখবেন ফাইল পাথ যেন ঠিক থাকে)
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
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
        path: "/about",
        element: <About />,
      },
      // ২. এই গোপন রাস্তাটি যোগ করুন
      {
        path: "/manage-doctors",
        element: <Doctors />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
