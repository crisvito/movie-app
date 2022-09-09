import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

export default function SearchResults(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function results() {
      const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=49e1eec372cf33de14fabcfa5aa83739&query=${props.keyword}`;
      const response = await fetch(urlMovie);
      const request = await response.json();
      if (request.results) setMovies(request.results);
    }
    results();
  });
  return <MovieList movies={movies} />;
}
