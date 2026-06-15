import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type MoviesScreenProps = {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MoviesScreen({ movies, setMovies, watchedMovies, setWatchedMovies}: MoviesScreenProps) {
  const [newMovie, setNewMovie] = useState("");
  //const [watchedMovies, setWatchedMovies] = useState<string[]>([]);

  // const movies = [
  //   "Interstellar",
  //   "Dune",
  //   "Arrival",
  //   "Masters of the Universe",
  // ]
  const addMovie = () => {
    if (!newMovie.trim()) return;

    setMovies([...movies, newMovie]);
    setNewMovie("");
  };

  const markAsWatched = (movie: string) => {
    setWatchedMovies([...watchedMovies, movie]);
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⋆ Movies ⋆</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a movie..."
        value={newMovie}
        onChangeText={setNewMovie}
      />

      <Pressable onPress={addMovie}>
        <Text style={styles.button}>Add Movie</Text>
      </Pressable>

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
    borderWidth: 1,
    borderColor: '#bec319',
    borderRadius: 6,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});