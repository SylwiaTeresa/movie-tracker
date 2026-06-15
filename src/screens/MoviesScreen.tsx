import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constans/theme";
import Footer from "../components/Footer";

type MoviesScreenProps = {
  movies: string[];
  setMovies: React.Dispatch<React.SetStateAction<string[]>>;
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MoviesScreen({ movies, setMovies, watchedMovies, setWatchedMovies}: MoviesScreenProps) {
  const [newMovie, setNewMovie] = useState("");

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

      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Add a movie to your list..."
          placeholderTextColor="#AAAAAA"
          value={newMovie}
          onChangeText={setNewMovie}
        />

        <Pressable onPress={addMovie}>
          <Text style={styles.addButton}>Add Movie</Text>
        </Pressable>
      </View>


      {movies.map((movie) => (
        <View key={movie} style={styles.movieContainer}>
          <Text style={styles.movie}>🎬 {movie} </Text>

          {watchedMovies.includes(movie) ? (
            <Text style={styles.watchedText}>✅ Watched</Text>
          ) : (
            <Pressable onPress={() => markAsWatched(movie)}>
              <Text style={styles.watchButton}>Mark as watched</Text>
            </Pressable>
          )}
        </View>
      ))}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // gap: 20,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.accent,
    textAlign: "center",
    marginBottom: 20,
  },
  inputSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "85%",
    borderWidth: 1,
    borderColor: '#999',
    color: colors.text,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButton: {
    color: colors.text,
    borderWidth: 2,
    borderColor: '#c3a719',
    fontSize: 16,
  
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 10,
  },
  movieContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  movie: {
    flex: 1,
    fontSize: 22,
    color: colors.text,
    marginBottom: 10,
  },
  watchedText: {
    color: colors.text,
    borderWidth: 1.5,
    borderColor: '#6ec319',
    fontSize: 16,
    
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  watchButton: {
    color: colors.text,
    borderWidth: 2,
    borderColor: '#199bc3',
    fontSize: 16,
    
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
});