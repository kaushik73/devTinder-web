const UserCard = ({ user }) => {
  return (
    <div className="card bg-slate-800 shadow-lg rounded-lg overflow-hidden w-80 m-4">
      <figure className="w-full bg-gray-200 flex justify-center py-6">
        <img
          src={user.profileURL}
          alt="Profile Photo"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
        />
      </figure>
      <div className="card-body text-center text-white p-6">
        <h2 className="text-2xl font-semibold mb-2">
          {user.fName} {user.lName}
        </h2>
        <p className="text-gray-300 text-sm mb-2">{user.about}</p>
        <p className="text-gray-400 text-sm">
          {user.age} years old, {user.gender}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
