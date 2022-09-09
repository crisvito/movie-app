import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MovieList(props) {
  let page = [];
  // console.log(props.page);

  return (
    <div className="MovieLists">
      <div className="cardsMovie">
        {/* {array.forEach((element) => {})} */}
        {props.movies.map((movie, index) => (
          <article className="cardMovie" key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "errImg"
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            {/* <p>{movie.overview}</p> */}
            <span>
              Release Dates :{" "}
              {new Date(movie.release_date).toLocaleDateString()}
            </span>
            <br />
            <span>Rate : {movie.vote_average} </span>
            <small className="spn-btn">
              <span>total votes : {movie.vote_count} </span>
              {/* <Link
                to={`/movie/detail/${movie.id + movie.vote_count}/${
                  movie.title
                }`}
                state={movie.id}
              >
                <button value={movie.id}>Details</button>
              </Link> */}
            </small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
