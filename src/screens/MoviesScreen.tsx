import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constans/theme";
import Footer from "../components/Footer";
import { MovieContext } from "../context/MovieContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function MoviesScreen() {
  const [newMovie, setNewMovie] = useState("");
  const context = useContext(MovieContext);

  if (!context) {
    return null;
  }

  const {movies, setMovies, watchedMovies, setWatchedMovies} = context;

  const addMovie = () => {
    if (!newMovie.trim()) return;

    setMovies([...movies, newMovie]);
    setNewMovie("");
  };

  const editMovie = (movieToEdit: string) => {
    setNewMovie(movieToEdit);

    setMovies(
      movies.filter((movie) => movie !== movieToEdit)
    );
  };

  const markAsWatched = (movie: string) => {
    setWatchedMovies([...watchedMovies, movie]);
  };

  const unwatchMovie = (movieToRemove: string) => {
    setWatchedMovies(
      watchedMovies.filter((movie) => movie !== movieToRemove)
    );
  };

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

          <View style={styles.buttonContainer}>
            <Pressable 
              onPress={() => editMovie(movie)}
              style={{ marginRight: 10 }}
            >
              <MaterialIcons
                name="edit"
                size={24}
                color={colors.accent}
              />
            </Pressable>

          {watchedMovies.includes(movie) ? (
            <Pressable onPress={() => unwatchMovie(movie)}>
              <MaterialIcons
                name="undo"
                size={24}
                color="#199bc3"
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => markAsWatched(movie)}>
              <MaterialIcons
                name="check-circle"
                size={24}
                color="#6ec319"
              />
            </Pressable>
          )}
          </View>
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
    borderWidth: 2.5,
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
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
});