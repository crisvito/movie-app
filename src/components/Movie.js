import React, { useState, useEffect } from "react";
import MovieListHeading from "./Header/MovieListHeading";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchBox/SearchResult";
import MovieGenreList from "./MovieGenre/MovieGenreList";
import MovieGenreResults from "./MovieGenre/MovieGenreResults";

const Movie = () => {
  const [keyword, setKeyword] = useState("");
  const [MovieGenreVal, setMovieGenreVal] = useState(" ");
  const [home, setHome] = useState(false);
  const [page, setPage] = useState([]);
  const [results, setResults] = useState([]);

  function handleHome() {
    if (!home) setHome(true);
    setKeyword("");
  }
  return (
    <div>
      <div>
        <MovieListHeading heading="Movies" />
        <MovieGenreList setHome={setHome} setMovieGenreVal={setMovieGenreVal} />
        <a onClick={handleHome}>Home</a>
        <SearchBox setHome={setHome} value={keyword} setKeyword={setKeyword} />
      </div>
      <div>
        {home === true && (
          <MovieGenreResults setPage={setPage} MovieGenreVal="action" />
        )}
        {keyword ? (
          <SearchResults keyword={keyword} />
        ) : (
          <MovieGenreResults MovieGenreVal={MovieGenreVal} />
        )}
      </div>
    </div>
  );
};

export default Movie;
