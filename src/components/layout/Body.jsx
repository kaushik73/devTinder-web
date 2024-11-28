import { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/userSlice";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [showError, setShowError] = useState(false);
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/profile/view",

        {
          withCredentials: true,
        }
      );
      const userData = res.data.data;
      dispatch(addUser(userData));
    } catch (err) {
      // token is not there in cookies
      if (err.status === 401) {
        navigate("/");
      } else {
        setShowError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userData) fetchUser();
    else setLoading(false);
  }, [userData]);

  if (showError) return <ErrorMessage />;
  if (loading) return <LoadingSpinner />;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-header">
        <Header />
      </div>
      <main className="flex-grow min-h-content">
        <Outlet />
      </main>
      <div className="h-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
