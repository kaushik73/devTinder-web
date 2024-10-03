import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <div className="w-6 h-6">
            <img src="/images/tinderIconjpg.jpg" />
          </div>
          DevTinder
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end mr-5">
          {user && (
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
            </>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
