import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constans/theme";
import Footer from "../components/Footer";

type WatchedScreenProps = {
  watchedMovies: string[];
  setWatchedMovies: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function WatchedScreen({
  watchedMovies,setWatchedMovies
}: WatchedScreenProps) {
  const removedMovie = (movieToRemove: string) => {
    setWatchedMovies(
      watchedMovies.filter((movie) => movie !== movieToRemove)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watched Movies</Text>

      {watchedMovies.map((movie) => (
        <View key={movie}>
          <Text style={styles.movie}>🎞️ {movie}</Text>

          <Pressable onPress={() => removedMovie(movie)}>
            <Text style={styles.removeButton}>Remove</Text>
          </Pressable>
        </View>
      ))}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
  //  gap: 20,
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
   movie: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
  },
  removeButton: {
    color: colors.text,
    borderWidth: 2,
    borderColor: '#c3192a',
    fontSize: 14,
  
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 10,
  },
});
