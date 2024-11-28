import { useState } from "react";

const MessageBox = ({ sendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      setNewMessage("");
      await sendMessage(trimmedMessage);
    }
  };
  return (
    <form
      className="p-4 flex border-t border-gray-300 bg-white sticky bottom-0"
      onSubmit={handleSendMessage}
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 p-2 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-pink-500 text-white rounded"
      >
        Send
      </button>
    </form>
  );
};

export default MessageBox;
