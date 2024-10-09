/* eslint-disable react/prop-types */

import Modal from "../Modal";

const ConnectionCard = ({ user }) => {
  return (
    <div className="pl-3 card card-side bg-slate-100 shadow-xl flex-wrap m-3">
      <figure className="w-40 h-50 ">
        <img
          src={user.profileURL}
          alt="Profile Image"
          className="rounded-full"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{user.fName + " " + user.lName}</h2>
        <div>
          <p>{user.age + ", " + user.gender}</p>

          <p>{user.about}</p>
        </div>
        <Modal
          modalHeading="Comming Soon!"
          buttonContent="Chat"
          modalContent="Till then, connect to more pepps!"
        />
      </div>
    </div>
  );
};

export default ConnectionCard;
