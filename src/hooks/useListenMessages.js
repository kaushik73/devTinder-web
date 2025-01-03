import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";
import { useSocketContext } from "../context/SocketContextProvider";

const useListenMessages = (setMessages) => {
  const { socket } = useSocketContext();

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Cleanup listener on unmount
    return () => socket.off("newMessage");
  }, [socket, setMessages]);
};

export default useListenMessages;
