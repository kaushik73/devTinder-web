import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useEffect, useRef } from "react";
dayjs.extend(isToday);

const Message = ({
  message,
  index,
  userToChatId,
  userProfileURL,
  myProfile,
  showDateDivider,
  // isLastMsg,
}) => {
  const isUserToChat = message.senderId === userToChatId;
  const profilePic = isUserToChat ? userProfileURL : myProfile;
  const sendMessageTime = dayjs(message.createdAt).format("h:mm A");
  const profileImagePlaceInMsg = isUserToChat ? "chat-start" : "chat-end";
  const backgroundAndTextColor = isUserToChat
    ? "bg-gray-300 text-black text-left"
    : "bg-pink-500 text-white text-right";
  // const messagesEndRef = useRef();

  // useEffect(() => {
  //   if (messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({
  //       behaviour: "instant",
  //       alignToTop: false,
  //       block: "end",
  //       inline: "end",
  //     });
  //   }
  // }, []);
  return (
    <div key={index} className="flex flex-col items-center">
      {/* Show date divider if it's a new day */}
      {showDateDivider && (
        <div className="w-full text-center text-gray-500 my-4 text-sm divider divider-secondary px-[20%]">
          {dayjs(message.createdAt).isToday()
            ? "Today"
            : dayjs(message.createdAt).format("MMMM D, YYYY")}
        </div>
      )}

      <div
        className={`flex ${
          isUserToChat ? "justify-start" : "justify-end"
        } w-full mb-4`}
      >
        <div className={`chat ${profileImagePlaceInMsg}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={profilePic} />
            </div>
          </div>
          {/* Todo :  overflow-hidden changes this to something relevant */}
          <div
            className={`chat-bubble ${backgroundAndTextColor} break-keep max-w-xl text-start overflow-hidden`}
          >
            <p>{message.message}</p>
          </div>
          <div className="chat-footer opacity-70">{sendMessageTime}</div>
        </div>
      </div>

      {/* {isLastMsg && <div className="h-12 bg-red-600"></div>} */}
      {/* <div className="h-0  bg-red-800" ref={messagesEndRef} /> */}
    </div>
  );
};

export default Message;
