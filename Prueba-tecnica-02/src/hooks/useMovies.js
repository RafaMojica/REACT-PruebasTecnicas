import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/searchMovies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return;
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    };
  }, []);

  return { movies, getMovies };
}
