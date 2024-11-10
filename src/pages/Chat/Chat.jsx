import { createRef, useEffect, useRef, useState } from "react";
import useChatData from "../../hooks/useChatData";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Message from "./Message";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const Chat = ({ userToChatId, userName, userProfileURL }) => {
  const messagesEndRef = useRef();
  const { messages, isLoading, error, sendMessage } = useChatData(userToChatId);
  const user = useSelector((store) => store.user);
  const messagesLength = messages.length;

  console.log(messages, "messages");

  // Scroll to the bottom of messages only, not the footer
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behaviour: "instant",
        alignToTop: false,
        block: "end",
        inline: "end",
      });
    }
  }, [messages]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col h-full overflow-y-auto1">
      {/* User Name  */}
      <div className="bg-gray-200 p-4 font-semibold text-lg text-black">
        {userName}
      </div>

      {/* Message Container */}
      {messagesLength === 0 ? (
        <div className="flex justify-center h-full text-gray-500 mt-4">
          Start a new Conversation
        </div>
      ) : (
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-2">
          <div className="overflow-y-auto1 max-h-full">
            {messages.map((message, index) => {
              const prevMessageDate =
                index > 0 ? dayjs(messages[index - 1].createdAt) : null;
              const currentMessageDate = dayjs(message.createdAt);
              const showDateDivider =
                !prevMessageDate ||
                !prevMessageDate.isSame(currentMessageDate, "day");

              // const isLastMsg = index === messagesLength - 1;
              return (
                <Message
                  ref={messagesEndRef}
                  key={message._id}
                  message={message}
                  index={index}
                  userToChatId={userToChatId}
                  userProfileURL={userProfileURL}
                  myProfile={user.profileURL}
                  showDateDivider={showDateDivider}
                />
              );
            })}
            {/* Ref to scroll only to messages, not footer */}
            <div className="h-0  bg-red-800" ref={messagesEndRef} />
            {/* <div className="h-4  bg-green-800" /> */}
            {/* <div className="h-4  bg-orange-800" /> */}
            {/* <div className="h-4  bg-gray-800" /> */}
          </div>
        </div>
      )}

      {/* Message input box */}
      <MessageBox sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
