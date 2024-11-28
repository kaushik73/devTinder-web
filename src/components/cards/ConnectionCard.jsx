import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const handleChatClick = () =>
    navigate("/chat", {
      state: {
        userToChatId: user._id,
        userName: user.fName + " " + user.lName,
      },
    });

  return (
    <>
      <div className="card card-side bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col md:flex-row">
        <figure className="w-full md:w-40 h-40 md:h-auto flex items-center justify-center p-4 bg-slate-200">
          <img
            src={user.profileURL}
            alt="Profile Image"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </figure>
        <div className="card-body text-gray-800 flex flex-col justify-between p-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              {user.fName} {user.lName}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              {user.age} years old, {user.gender}
            </p>
            <p className="text-sm text-gray-700">{user.about}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleChatClick}
              className="text-slate-300 bg-black rounded-lg px-4 py-2 text-lg font-semibold"
            >
              Chat
            </button>
          </div>
        </div>
      </div>

      {/* {isChatOpen && (
        <Chat
          userToChatId={user._id}
          userName={user.fName + " " + user.lName}
        />
      )} */}
    </>
  );
};

export default UserCard;

//  {/* Modal for Chat */}
//  {false && (
//   <div className="fixed inset-0 flex items-center justify-center z-50">
//     {/* Modal background overlay */}
//     <div
//       className="fixed inset-0 bg-black opacity-50"
//       onClick={handleCloseModal}
//     ></div>

//     {/* Modal content */}
//     <div className="relative bg-white w-[50%] mx-auto rounded-lg shadow-lg p-4 z-50">
//       <div className="flex justify-between items-center border-b pb-2 mb-4">
//         <h2 className="text-xl font-semibold text-gray-800">Chat Room</h2>
//         <button
//           onClick={handleCloseModal}
//           className="text-gray-500 hover:text-gray-800 focus:outline-none"
//         >
//           &times;
//         </button>
//       </div>
//       <Chat
//         userToChatId={user._id}
//         userName={user.fName + " " + user.lName}
//       />
//     </div>
//   </div>
// )}
