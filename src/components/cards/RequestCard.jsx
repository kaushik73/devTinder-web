/* eslint-disable react/prop-types */
const RequestCard = ({
  user,
  // requestId,
  handleRequest,
  status = "Interested",
}) => {
  return (
    <div className="pl-3 card  card-side bg-slate-100 shadow-xl flex-wrap">
      <figure className="w-40 h-50">
        <img
          src={user.profileURL}
          alt="Profile Image"
          className="rounded-full"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{user.fName + " " + user.lName}</h2>
        <p>{user.age + ", " + user.gender}</p>
        <p>{user.about}</p>
        <p>{status}</p>
        <div className="card-actions justify-start">
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
