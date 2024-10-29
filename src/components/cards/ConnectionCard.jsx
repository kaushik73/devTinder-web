import Modal from "../common/Modal";

const ConnectionCard = ({ user }) => {
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
            <Modal
              modalHeading="Coming Soon!"
              buttonContent="Chat"
              modalContent="Till then, connect to more peeps!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionCard;
