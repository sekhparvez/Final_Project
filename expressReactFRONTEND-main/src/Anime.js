import React from "react";
import { Link } from "react-router-dom";


function Anime({ anime }) {
  const { title, year, description, image, _id } = anime;
  return (
    <summary>
      
      <img src={`img/${image}`} alt={title} />
      <h2>
        <Link to={_id}>{title}</Link>
      </h2>
      <p>{description}</p>
      <small>Published: {year}</small>
    </summary>
  );
}

export default Anime;
