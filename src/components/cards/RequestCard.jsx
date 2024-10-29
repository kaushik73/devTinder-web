const RequestCard = ({ user, handleRequest, status = "Interested" }) => {
  return (
    <div className="card card-side bg-white shadow-md rounded-lg overflow-hidden m-4 flex flex-col md:flex-row">
      <figure className="w-full md:w-40  flex items-center justify-center bg-gray-200 p-4">
        <img
          src={user.profileURL}
          alt="Profile Image"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </figure>
      <div className="card-body text-gray-800 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {user.fName} {user.lName}
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            {user.age} years old, {user.gender}
          </p>
          <p className="text-sm text-gray-700 mb-2">{user.about}</p>
          <p className="text-sm text-gray-700 mb-2">Status: {status}</p>
        </div>
        <div className="card-actions flex gap-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("rejected", user._id)}
          >
            Reject
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("accepted", user._id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

/*

const RequestCard = ({ user, handleRequest, status = "Interested" }) => {
  return (
    <div className="card card-side bg-white shadow-md rounded-lg overflow-hidden m-4 flex flex-col md:flex-row">
      <figure className="w-full md:w-40 h-40 flex items-center justify-center bg-gray-200 p-4">
        <img
          src={user.profileURL}
          alt="Profile Image"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </figure>
      <div className="card-body text-gray-800 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {user.fName} {user.lName}
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            {user.age} years old, {user.gender}
          </p>
          <p className="text-sm text-gray-700 mb-2">{user.about}</p>
          <p className="text-xs text-gray-500 italic mb-2">Status: {status}</p>
        </div>
        <div className="card-actions flex gap-4 mt-4">
          <button
            className="btn btn-primary px-4 py-2 rounded-full shadow-md"
            onClick={() => handleRequest("rejected", user._id)}
          >
            Reject
          </button>
          <button
            className="btn btn-secondary px-4 py-2 rounded-full shadow-md"
            onClick={() => handleRequest("accepted", user._id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;


*/
