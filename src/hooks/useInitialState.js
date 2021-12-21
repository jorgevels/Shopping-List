import { useEffect, useState } from "react";

const useInitialState = (url) => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => setTvShows(data));
  }, []);

  return tvShows;
};

export default useInitialState;
