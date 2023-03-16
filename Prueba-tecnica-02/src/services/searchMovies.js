const API_KEY = "f4e2ead2";
const SEARCH_MOVIE_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  
  try {
    const response = await fetch(`${SEARCH_MOVIE_API}s=${search}`);
    const data = await response.json();
    const movie = data.Search;

    return movie?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error en la busqueda");
  }
};
