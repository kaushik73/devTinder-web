// import { useEffect } from "react";

// import notificationSound from "../assets/notification.mp3";
// import useChatData from "./useChatData";
// import { useSocketContext } from "../context/SocketContextProvider";

// const useListenMessages = () => {
//   const { socket } = useSocketContext();
//   const { messages, setMessages } = useChatData();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       newMessage.shouldShake = true;
//       const sound = new Audio(notificationSound);
//       sound.play();
//       setMessages((prevMessages) => [...prevMessages, newMessage]); // Functional update
//     });
//     console.log("useListenMessages hook callled", messages);

//     return () => socket?.off("newMessage");
//   }, [socket, setMessages, messages]);
// };
// export default useListenMessages;

import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";
import { useSocketContext } from "../context/SocketContextProvider";

const useListenMessages = (setMessages) => {
  const { socket } = useSocketContext();

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      console.log("Received newMessage event:", newMessage);

      // Play notification sound
      const sound = new Audio(notificationSound);
      sound.play();

      // Update messages state using functional update
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Cleanup listener on unmount
    return () => socket.off("newMessage");
  }, [socket, setMessages]);
};

export default useListenMessages;
