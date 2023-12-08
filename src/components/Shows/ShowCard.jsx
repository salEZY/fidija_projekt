import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div style={{ margin: "1rem", width: 250 }}>
      <img src={show.image.medium} />
      <h3>{show.name}</h3>
      <p>
        {show.genres.map((gen) => (
          <span key={gen} style={{ margin: "0 5px" }}>
            {gen}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ShowCard;
