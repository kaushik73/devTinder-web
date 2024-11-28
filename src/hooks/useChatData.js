import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useChatData = (userToChatId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (userToChatId) {
      fetchMessages();
    }
  }, [userToChatId]);

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/messages/${userToChatId}`, {
        withCredentials: true,
      });
      setMessages(response.data);
    } catch (e) {
      console.error("Error fetching chat data:", e);
      setError("Unable to load chat, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (newMessage) => {
    if (newMessage.trim()) {
      try {
        const response = await axios.post(
          `${BASE_URL}/messages/send/${userToChatId}`,
          { message: newMessage },
          { withCredentials: true }
        );
        setMessages((prevMessages) => [...prevMessages, response.data.message]);
        return response.data.message;
      } catch (e) {
        console.error("Error sending message:", e);
        setError("Failed to send message.");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  };

  return { messages, isLoading, error, sendMessage, setMessages };
};

export default useChatData;
