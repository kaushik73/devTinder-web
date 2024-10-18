import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addConnection } from "../store/connectionReducer";
import ConnectionCard from "./cards/ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data, "connection data");
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);
  if (!connections) return <p>Error Fetching Connection.</p>;
  if (connections.length === 0) return <h1>No Connection to see</h1>;
  return (
    <div
      className="grid 
      
      lg:grid-cols-3 
      md:grid-cols-2 
      sm:grid-cols-1 my-3"
    >
      {connections.map((connection) => {
        console.log("connection card", connection);

        return (
          <div key={connection._id}>
            <ConnectionCard user={connection} />
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
