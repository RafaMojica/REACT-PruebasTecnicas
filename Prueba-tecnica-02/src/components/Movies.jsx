import React from "react";

export function ListMovies({ movies }) {
  return (
    <>
      <ul className="movies">
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={`${movie.poster}`} alt={`${movie.title}`} />
          </li>
        ))}
      </ul>
    </>
  );
}

export function ResultReject() {
  return <p>No se encontro la pelicula</p>;
}

export default function Movies({ movies }) {
  return movies?.length ? <ListMovies movies={movies} /> : <ResultReject />;
}
