import { useState, useEffect } from "react";
import axios from "axios";
import ShowCard from "./Shows/ShowCard";

const Shows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const shows = await axios("https://api.tvmaze.com/shows");

      setShows(shows.data);
    };
    fetchShows();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {shows.map((show) => {
        return <ShowCard show={show} key={show.id} />;
      })}
    </div>
  );
};

export default Shows;
