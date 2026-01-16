import { Toaster } from "react-hot-toast";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        {isLoading ? (
          <div className="text-center p-20">Loading...</div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
      <Toaster /> {/* এই লাইনটি নোটিফিকেশন দেখাতে সাহায্য করবে */}
    </div>
  );
};

export default MainLayout;
