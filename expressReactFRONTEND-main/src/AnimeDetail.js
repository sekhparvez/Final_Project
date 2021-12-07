import React from "react";
import { Link, useParams } from "react-router-dom";

function AnimeDetail(props) {
  const { animeId } = useParams();
  const currAnime = props.animes.filter((anime) => anime._id === animeId);
  const thisAnime = { ...currAnime[0] };

  return (
    <div>
      <img src={`/img/${thisAnime.image}`} alt={thisAnime.title} />
      <h1>{thisAnime.title}</h1>
      <p>{thisAnime.description}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default AnimeDetail;
