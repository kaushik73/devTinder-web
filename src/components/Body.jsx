import { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/profile/view",

        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));
    } catch (err) {
      // token is not there in cookies
      if (err.status === 401) {
        navigate("/login");
      }
      console.error("Error : ", err);
    }
  };

  useEffect(() => {
    console.log(userData, "userData");

    if (!userData) fetchUser();
  }, []);

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
