import React from "react";
import Anime from "./Anime";
import FormCreateAnime from "./FormCreateAnime";

function Animes({ animes, loggedin, addAnime }) {
  return (
    <section>
      {loggedin && <FormCreateAnime addAnime ={addAnime}/>}
      {animes.map((anime) => (
        <Anime key={anime._id} anime={anime} />
      ))}
    </section>
  );
}

export default Animes;
