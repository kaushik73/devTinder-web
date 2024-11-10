import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { removeUser } from "../../store/userSlice";
import { emptyFeedList } from "../../store/feedSlice";
import { emptyRequestList } from "../../store/requestSlice";
import { removeConnection } from "../../store/connectionReducer";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentURLPath = location?.pathname;
  const hideLoginLocations = ["/login", "/signup"];
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(emptyFeedList());
      dispatch(emptyRequestList());
      dispatch(removeConnection());
    } catch (err) {
      console.error("Error : " + err);
    }
  };

  return (
    <div className="navbar h-header bg-base-200 ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <div className="w-6 h-6">
            <img src="/images/tinderIcon.jpg" />
          </div>
          DevTinder
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user && (
          <div className="dropdown dropdown-end mr-5">
            <>
              <div className="flex items-center gap-3">
                <div>Welcome, {user.fName}</div>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Photo" src={user.profileURL} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/feed">Feed</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout} to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          </div>
        )}
        {!user && !hideLoginLocations.includes(currentURLPath) && (
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-auto mr-8 w-20  p-0 shadow">
            <li>
              <Link to="/login" className="text-lg">
                Login
              </Link>
            </li>{" "}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
