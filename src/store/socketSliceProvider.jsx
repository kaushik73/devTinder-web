import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSocket, setOnlineUsers, resetSocket } from "./socketSlice";
import io from "socket.io-client";
import { BASE_URL } from "../utils/constants";

export const SocketSliceProvider = ({ children }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((store) => store.user);
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (authUser && !socket) {
      // Initialize socket connection
      const socketInstance = io(BASE_URL, {
        query: { userId: authUser._id },
      });

      dispatch(setSocket(socketInstance));

      // Listen to 'getOnlineUsers' event
      socketInstance.on("getOnlineUsers", (users) => {
        dispatch(setOnlineUsers(users));
      });

      // Clean up on unmount
      return () => {
        socketInstance.close();
        dispatch(resetSocket());
      };
    } else if (!authUser && socket) {
      // Close socket if user logs out
      dispatch(resetSocket());
    }
  }, [authUser, dispatch, socket]);

  return <>{children}</>;
};
