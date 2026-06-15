import { createContext } from "react";

type MovieContextType = {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
}

export const MovieContext = createContext<MovieContextType | null>(null);