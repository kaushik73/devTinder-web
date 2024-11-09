import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../store/feedSlice";
import FeedCard from "../components/cards/FeedCard";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Toaster from "../components/common/Toaster";

const Feed = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toaster, setToaster] = useState({ message: "", type: "" });

  const dispatch = useDispatch();

  const feedData = useSelector((store) => store.feed);

  const getFeedData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });

      const feed = res.data.data;
      console.log(feed, "feed");

      if (feed && feed.length > 0) {
        dispatch(addFeed(feed));
      } else {
        console.log("else called");

        setError("No More Feed to show!");
      }
    } catch (e) {
      console.error("Error fetching feed data:", e);
      setError("Unable to load feed, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequest = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        }
      );

      status === "interested"
        ? setToaster({ message: "Marked as Interested", type: "success" })
        : setToaster({ message: "Marked as Ignored", type: "error" });
      dispatch(removeUserFromFeed(userId));

      setTimeout(() => {
        setToaster({ message: "", type: "" });
      }, 1000);
    } catch (err) {
      console.error("Error sending connection request:", err);
      setToaster({
        message: "Error Sending Connection Request",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (!feedData) {
      getFeedData();
    }
  }, [feedData]);

  if (error) return <ErrorMessage message={error} />;
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <>
      {feedData && feedData.length > 0 ? (
        <div className="flex items-center justify-center m-3">
          <FeedCard
            key={feedData[0]._id}
            user={feedData[0]}
            handleRequest={handleRequest}
          />
        </div>
      ) : (
        <ErrorMessage message="No More Feed to show!" />
      )}

      {/* Toaster */}
      {toaster.message && (
        <Toaster message={toaster.message} type={toaster.type} timer="1000" />
      )}
    </>
  );
};

export default Feed;
