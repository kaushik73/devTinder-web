/* eslint-disable react/prop-types */
const FeedCard = ({ user, handleRequest }) => {
  return (
    <div className="card card-compact bg-slate-800 w-96 shadow-xl">
      <figure className="pt-2">
        <img src={user.profileURL} alt="Profile Photo" />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title ">{user.fName + " " + user.lName}</h2>
        <p>{user.about}</p>
        <p>{user.age + ", " + user.gender}</p>
        {/* <div className="card-actions justify-end"></div> */}
        <div className="card-actions justify-start">
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
