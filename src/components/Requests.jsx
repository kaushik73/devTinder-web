import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../store/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "./cards/RequestCard";
import Toaster from "./Toaster";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [message, setMessage] = useState("");
  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      setMessage(res.data.message);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error("Error is : ", err);
    }
  };
  useEffect(() => {
    getRequests();
  }, []);
  if (!requests) return <p>Error Fetching Req.</p>;
  if (requests.length === 0) return <h1>No Requests to see</h1>;
  return (
    <div
      className="grid gap-3 
    lg:grid-cols-3 
    md:grid-cols-2 
    sm:grid-cols-1 my-3"
    >
      {" "}
      {requests.map((request) => {
        return (
          <div key={request._id}>
            {" "}
            <RequestCard
              user={request.fromUserId}
              handleRequest={handleRequest}
            />
            {message && <Toaster message={message} type="error" />}
            {/* <RequestCard user={request.fromUserId} status={request.status} />
            <RequestCard user={request.fromUserId} status={request.status} />
            <RequestCard user={request.fromUserId} status={request.status} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
