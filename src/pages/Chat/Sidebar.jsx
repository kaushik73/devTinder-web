import SideBarSearch from "./SideBarSearch";
import SideBarUser from "./SideBarUser";

const Sidebar = ({ sideBarUsers, selectedUser, onSelectUser }) => {
  // To be implemented
  const handleSidebarSearch = (searchUser) => {
    if (!searchUser) return;
    const searchedUser = sideBarUsers.find(
      (user) =>
        user.fName.toLowerCase().includes(searchUser) ||
        user.lName.toLowerCase().includes(searchUser)
    );
    console.log("searchedUser", searchedUser);
    selectedUser = searchedUser;
  };
  return (
    <div className="sidebar bg-gray-800 text-white h-full flex flex-col">
      {/* Sidebar Search */}
      {/* <div className="p-4"> */}
      <SideBarSearch handleSidebarSearch={handleSidebarSearch} />
      {/* </div> */}

      {/* Users List (Scrollable) */}
      <div className="flex-1 overflow-y-auto">
        {sideBarUsers.map((user, idx) => (
          <SideBarUser
            key={user._id}
            user={user}
            isSelected={selectedUser === user._id}
            onClick={() => onSelectUser(user)}
            lastIdx={idx === sideBarUsers.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
