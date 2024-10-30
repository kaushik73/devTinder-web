import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-700 mt-4 mb-6 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-200"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
