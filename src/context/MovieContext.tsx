import { createContext, ReactNode, useState } from "react";

type MovieContextType = {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
}

export const MovieContext = createContext<MovieContextType | null>(null);

type MovieProviderProps = {
  children: ReactNode;
};

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState([
    "Interstellar",
    "Dune",
    "Arrival",
    "Masters of the Universe",
  ]);

  const [watchedMovies, setWatchedMovies] = useState<string[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, watchedMovies, setWatchedMovies}}>
      {children}
    </MovieContext.Provider>
  );
}