import React from "react";
import Animes from "./Animes";
import AnimeDetail from "./AnimeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch  from "./hooks/useFetch";
import Nav from "./Nav";
import useToggle from "./hooks/useToggle";




function App() {
  const [animes, setAnimes] = React.useState([]);
  const [loggedin, setLoggedin] = useToggle(true);
  const [loading, setLoading] = useToggle(true);
  const [error, setError] = React.useState("");
  const { get, post } = useFetch(`/api/animes`);
  
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    setLoading(true);
    get("/api/animes")
      .then((data) => {
        setAnimes(data);
        setLoading(false);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  const addAnime = (anime) => {
    post("/api/animes", anime).then((data) => {
      setAnimes([data, ...animes]);
    });
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <BrowserRouter>
      <Nav loggedin={loggedin} setLoggedin = {setLoggedin}/>
        <Routes>
          <Route path="/" element={<Animes animes={animes} loggedin ={loggedin} addAnime = {addAnime}/>} />
          <Route
            path="/:animeId"
            element={<AnimeDetail animes={animes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
