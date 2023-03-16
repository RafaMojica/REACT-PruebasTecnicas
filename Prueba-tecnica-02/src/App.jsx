import { useCallback, useState } from "react";
import "./App.css";
import Movie from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function App() {
  const [search, setSearch] = useState("");
  const { movies, getMovies } = useMovies({ search });

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 1000)
    , [getMovies]
  )

  const handleSubmit = async (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header className="search">
        <h1>Desarrollo prueba tecnica</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Busca una pelicula..."
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movie movies={movies} />
      </main>
    </div>
  );
}

export default App;
