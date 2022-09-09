import React from "react";
import MovieList from "../MovieList/MovieList";
import { useState, useEffect } from "react";

function MovieGenreResults(props) {
  const [detailGenre, setDetailGenre] = useState([]);
  const [page, setPage] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const request = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=49e1eec372cf33de14fabcfa5aa83739&with_genres=${props.MovieGenreVal}`
      );
      const response = await request.json();

      setPage(response.total_pages);
      setDetailGenre(response.results);
    }
    getMovies();
  }, [detailGenre]);
  return (
    <div>
      <MovieList movies={detailGenre} page={page} />
    </div>
  );
}

export default MovieGenreResults;
