import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = ({ conversationId, userId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join room on component mount
    socket.emit("joinRoom", conversationId);

    // Listen for incoming messages
    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Clean up on component unmount
    return () => socket.disconnect();
  }, [conversationId]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        conversationId,
        senderId: userId,
        receiverId: "receiverId",
        content: message,
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.senderId === userId ? "sent" : "received"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
