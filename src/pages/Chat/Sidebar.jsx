import SideBarSearch from "./SideBarSearch";
import SideBarUser from "./SideBarUser";

const Sidebar = ({ sideBarUsers, selectedUser, onSelectUser }) => {
  // return (
  //   <div className="sidebar bg-gray-800 text-white w-full md:w-1/4 h-full flex flex-col">
  //     <div className="p-4">
  //       <SideBarSearch />
  //     </div>
  //     <div className="flex-1 overflow-y-auto">
  //       {sideBarUsers.map((user, idx) => (
  //         <SideBarUser
  //           key={user._id}
  //           user={user}
  //           isSelected={selectedUser === user._id}
  //           onClick={() => onSelectUser(user)}
  //           lastIdx={idx === sideBarUsers.length - 1}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="sidebar bg-gray-800 text-white h-full flex flex-col">
      {/* Sidebar Search */}
      <div className="p-4">
        <SideBarSearch />
      </div>

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
