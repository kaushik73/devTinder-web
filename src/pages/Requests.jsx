import axios from "axios";
import { useEffect, useState } from "react";
import { addRequests, removeRequest } from "../store/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "../components/cards/RequestCard";
import Toaster from "../components/common/Toaster";
import ErrorMessage from "../components/common/ErrorMessage";
import { BASE_URL } from "../utils/constants";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [message, setMessage] = useState("");
  const [somethingWrong, setSomethingWrong] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getRequests = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}/user/request/recieved`, {
        withCredentials: true,
      });

      if (res.status === 204) {
        setError("No pending requests available.");
        return;
      }

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Error fetching requests. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      setMessage(res.data.message);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error("Error updating request:", err);
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
      setSomethingWrong(true);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (error) return <ErrorMessage message={error} />;
  if (somethingWrong) return <ErrorMessage message="Something went wrong." />;
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-3 mx-4">
      {requests &&
        requests.map((request) => (
          <div key={request._id}>
            <RequestCard
              user={request.fromUserId}
              handleRequest={handleRequest}
            />
          </div>
        ))}
      {message && <Toaster message={message} type="success" />}
    </div>
  );
};

export default Requests;
