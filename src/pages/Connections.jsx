import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addConnection } from "../store/connectionReducer";
import ConnectionCard from "../components/cards/ConnectionCard";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Connections = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const getConnections = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);
  if (isLoading) return <LoadingSpinner />;
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
