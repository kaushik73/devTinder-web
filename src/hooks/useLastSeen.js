// Not in use Anywhere for now
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const useLastSeen = (userId) => {
  const [lastSeen, setLastSeen] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    const fetchLastSeen = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/users/${userId}/last-seen`,
          {
            withCredentials: true,
          }
        );
        setLastSeen(response.data.lastActiveTime);
      } catch (e) {
        console.error("Error fetching last seen:", e);
        setError("Unable to fetch last seen time");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastSeen();
  }, [userId]);

  return { lastSeen, isLoading, error };
};

export default useLastSeen;
