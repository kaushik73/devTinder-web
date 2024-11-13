import { createContext, useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setOnlineUsers, resetSocket } from "../store/socketSlice";
import io from "socket.io-client";
import { BASE_URL } from "../utils/constants";

const SocketContext = createContext(null);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const authUser = useSelector((store) => store.user);

  useEffect(() => {
    if (authUser) {
      const socket = io(BASE_URL, {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
