import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { addConnection } from "../../store/connectionReducer";
import ConnectionCard from "../cards/ConnectionCard";
import ErrorMessage from "../common/ErrorMessage";

const Connections = () => {
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      if (res.status === 204) {
        setError("No connections available.");
        return;
      }
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.error("Error fetching connections:", err);
      setError("Error fetching connections. Please try again.");
    }
  };

  useEffect(() => {
    getConnections();
  }, []);
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-3 mx-4">
      {connections &&
        connections.map((connection) => {
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
