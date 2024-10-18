/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../store/feedSlice";
import FeedCard from "./cards/FeedCard";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feedData = useSelector((store) => store.feed);
  const userData = useSelector((store) => store.user);

  const getFeedData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      if (res.data.data) {
        dispatch(addFeed(res.data.data));
        console.log();
      }
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      // setMessage(res.data.message);
      dispatch(removeUserFromFeed(_id));
    } catch (err) {
      console.error("Error is : ", err);
    }
  };

  useEffect(() => {
    if (!userData) navigate("/login");
    if (feedData) return;
    getFeedData();
  }, []);

  if (!feedData) return;
  if (feedData.length <= 0) return <h1>No More Feed to show!</h1>;
  return (
    <>
      {feedData && (
        <div className="flex items-center justify-center m-3">
          <FeedCard
            key={feedData[0]._id}
            user={feedData[0]}
            handleRequest={handleRequest}
          />
        </div>

        // <>
        //   <div className="flex-col items-center">
        //     {feedData.map((user) => {
        //       return <UserCard key={user._id} user={user} />;
        //     })}
        //   </div>{" "}
        // </>
      )}
    </>
  );
};

export default Feed;
