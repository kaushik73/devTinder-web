import SideBarSearch from "./SideBarSearch";
import SideBarUser from "./SideBarUser";
import { useSocketContext } from "../../context/SocketContextProvider";

const Sidebar = ({ sideBarUsers, selectedUser, onSelectUser }) => {
  // Todo : To be implemented
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

  const { onlineUsers } = useSocketContext();

  return (
    <div className="bg-gray-800 text-white h-full min-h-44 flex flex-col">
      {/* Sidebar Search */}
      <SideBarSearch handleSidebarSearch={handleSidebarSearch} />

      {/* Users List (Scrollable) */}
      <div className="flex-1 overflow-y-auto">
        {sideBarUsers.map((user, idx) => {
          const isUserOnline = onlineUsers?.onlineUsers?.includes(user._id);
          return (
            <SideBarUser
              key={user._id}
              user={user}
              isSelected={selectedUser === user._id}
              onClick={() => onSelectUser(user)}
              lastIdx={idx === sideBarUsers.length - 1}
              isUserOnline={isUserOnline}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
