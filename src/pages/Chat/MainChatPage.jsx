import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const MainChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [sideBarUsers, setSideBarUsers] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSideBarUsers = async () => {
    try {
      setIsLoading(true);
      let sidebarUsers = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      sidebarUsers = sidebarUsers.data.data;
      if (sidebarUsers && sidebarUsers.length > 0) {
        setSideBarUsers(sidebarUsers);
      } else {
        setError("No Chats to show, Make some connection first!");
      }
    } catch (e) {
      console.error("Error fetching side bar users data:", e);
      setError("Error fetching side bar users data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSideBarUsers();
  }, []);

  if (error) return <ErrorMessage message={error} />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex min-h-content">
      {/* Sidebar (Sticky) */}
      {sideBarUsers && (
        <div className="sidebar  bg-gray-800 text-white w-1/4 h-full">
          <Sidebar
            sideBarUsers={sideBarUsers}
            selectedUser={selectedUser?._id}
            onSelectUser={(user) => setSelectedUser(user)}
          />
        </div>
      )}

      {/* Chat Window */}
      <div className="flex-1">
        {selectedUser ? (
          <Chat
            userToChatId={selectedUser._id}
            userName={`${selectedUser.fName} ${selectedUser.lName}`}
            userProfileURL={selectedUser.profileURL}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default MainChatPage;
