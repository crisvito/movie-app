import React, { useState } from "react";
import { useEffect } from "react";

function MovieGenreList(props) {
  const [MovieGenreL, setMovieGenreL] = useState([]);
  useEffect(() => {
    async function getMovieGenre() {
      const request = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=49e1eec372cf33de14fabcfa5aa83739`
      );
      const response = await request.json();
      setMovieGenreL(response.genres);
    }
    getMovieGenre();
  }, []);

  return (
    <div className="container list">
      <ul className="genreList">
        {MovieGenreL.map((genre) => {
          return (
            <li
              value={genre.id}
              onClick={(e) => {
                props.setMovieGenreVal(e.target.value);
                props.setHome(false);
              }}
              className="list"
              key={genre.id}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieGenreList;
