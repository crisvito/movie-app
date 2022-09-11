import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieListHeading from "./Header/MovieListHeading";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchBox/SearchResult";
import MovieGenreList from "./MovieGenre/MovieGenreList";
import MovieGenreResults from "./MovieGenre/MovieGenreResults";

const Movie = () => {
  const [keyword, setKeyword] = useState("");
  const [MovieGenreVal, setMovieGenreVal] = useState(" ");
  const [home, setHome] = useState(false);

  function handleHome() {
    if (!home) setHome(true);
    setKeyword("");
  }
  return (
    <div>
      <div>
        <MovieListHeading heading="Movies" />
      </div>
      <div>
        <MovieGenreList setHome={setHome} setMovieGenreVal={setMovieGenreVal} />
        <Link to={"/"} onClick={handleHome}>
          Home
        </Link>
        <SearchBox setHome={setHome} value={keyword} setKeyword={setKeyword} />
      </div>
      <div>
        {home === true && <MovieGenreResults MovieGenreVal="action" />}
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
