import { useState } from "react";

const FeedCard = ({ user, handleRequest }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`card card-compact bg-gray-800 w-80 shadow-lg rounded-lg overflow-hidden m-4 transition-opacity duration-700 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <figure className="flex justify-center bg-gray-300 p-4">
        {!imageLoaded && (
          <div className="animate-pulse h-32 w-32 flex items-center justify-center rounded-full bg-gray-500">
            Loading...
          </div>
        )}
        <img
          src={user.profileURL}
          alt="Profile Photo"
          className={`w-32 h-32 rounded-full object-cover border-4 border-white shadow-md transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </figure>
      <div className="card-body text-center text-white p-4">
        <h2 className="text-xl font-bold mb-2">
          {user.fName} {user.lName}
        </h2>
        <p className="text-gray-300 text-sm mb-2">{user.about}</p>
        <p className="text-gray-400 text-sm">
          {user.age} years old, {user.gender}
        </p>
        <div className="card-actions flex justify-evenly mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("ignored", user._id)}
          >
            Ignored
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("interested", user._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

// import { useState } from "react";

// const FeedCard = ({ user, handleRequest }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div
//       className={`card card-compact bg-gray-800 w-80 shadow-lg rounded-lg overflow-hidden m-4 transition-opacity duration-700 ${
//         imageLoaded ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <figure className="flex justify-center bg-gray-300 p-4">
//         {!imageLoaded && (
//           <div className="animate-pulse h-32 w-32 flex items-center justify-center rounded-full bg-gray-500">
//             Loading...
//           </div>
//         )}
//         <img
//           src={user.profileURL}
//           alt="Profile Photo"
//           className={`w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-md transition-opacity duration-500 ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           onLoad={() => setImageLoaded(true)}
//           onError={() => setImageLoaded(true)}
//         />
//       </figure>
//       <div className="card-body text-center text-white p-4">
//         <h2 className="card-title text-xl font-bold mb-2">
//           {user.fName} {user.lName}
//         </h2>
//         <p className="text-gray-300 text-sm mb-2">{user.about}</p>
//         <p className="text-gray-400 text-sm">{user.age} years old, {user.gender}</p>
//         <div className="card-actions flex justify-evenly mt-4">
//           <button
//             className="btn btn-primary bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-2 shadow-md"
//             onClick={() => handleRequest("ignored", user._id)}
//           >
//             Ignore
//           </button>
//           <button
//             className="btn btn-secondary bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 shadow-md"
//             onClick={() => handleRequest("interested", user._id)}
//           >
//             Interested
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
