import { useEffect, useState } from "react";
import NavBar from "../layout/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/userSlice";
import ErrorMessage from "../common/ErrorMessage";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/profile/view",

        {
          withCredentials: true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
      );

      dispatch(addUser(res.data.data));
    } catch (err) {
      // token is not there in cookies
      if (err.status === 401) {
        navigate("/login");
      } else {
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    if (!userData) fetchUser();
  }, []);

  if (showError) return <ErrorMessage />;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-header">
        <NavBar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="min-h-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
