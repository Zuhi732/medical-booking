import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // কনসোলে এরর দেখার জন্য

  return (
    <div>
      {/* রিকোয়ারমেন্ট অনুযায়ী Navbar থাকবে */}
      <Navbar />

      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
        <h2 className="text-4xl font-bold text-gray-800">Page Not Found</h2>
        <p className="text-gray-500 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
      </div>

      {/* রিকোয়ারমেন্ট অনুযায়ী এখানে কোনো Footer নেই */}
    </div>
  );
};

export default ErrorPage;
