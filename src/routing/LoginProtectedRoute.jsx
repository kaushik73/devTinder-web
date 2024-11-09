import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.user);

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" replace state={{ message: "Please Login First" }} />
    );
  }
  return children;
};

export default LoginProtectedRoute;
