//import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type MoviesScreenProps = {
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MoviesScreen({ watchedMovies, setWatchedMovies}: MoviesScreenProps) {
  //const [watchedMovies, setWatchedMovies] = useState<string[]>([]);

  const movies = [
    "Interstellar",
    "Dune",
    "Arrival",
    "Masters of the Universe",
  ]
  const markAsWatched = (movie: string) => {
    setWatchedMovies([...watchedMovies, movie]);
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⋆ Movies ⋆</Text>

      {movies.map((movie) => (
        <View key={movie} style={styles.movieContainer}>
          <Text style={styles.movie}>🎬 {movie} </Text>

          {watchedMovies.includes(movie) ? (
            <Text>✅ Watched</Text>
          ) : (
            <Pressable onPress={() => markAsWatched(movie)}>
              <Text style={styles.button}>Mark as watched</Text>
            </Pressable>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  movieContainer: {
    marginBottom: 20,
  },
  movie: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    fontSize: 16,
  },
});