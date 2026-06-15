import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constans/theme";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function WatchedScreen() {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const context = useContext(MovieContext);

  if (!context) {
    return null;
  }

  const {watchedMovies, setWatchedMovies} = context;

  const removedMovie = (movieToRemove: string) => {
   Alert.alert(
    "Remove movie",
    `Are you sure you want to remove the movie "${movieToRemove}"?`,
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => {
          setWatchedMovies(
            watchedMovies.filter(
              (movie) => movie !== movieToRemove
            )
          );
        },
      },
    ]
   );
  };

  const rateMovie = (movie: string, rating: number) => {
    setRatings({
      ...ratings,
      [movie]: rating,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watched Movies</Text>

      {watchedMovies.map((movie) => (
        <View key={movie}>
          <Text style={styles.movie}>🎞️ {movie}</Text>
          <View style={styles.buttonRow}>
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Pressable
                  key={star}
                  onPress={() => rateMovie(movie, star)}
                >
                  <Text style={styles.star}>
                    {star <= (ratings[movie] || 0) ? "🔆" : "🔅"}
                  </Text>
                </Pressable>
              ))}

            </View>
            <Pressable onPress={() => removedMovie(movie)}>
              <MaterialIcons
                name="delete"
                size={26}
                color="#c3192a"
              />
            </Pressable>
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
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  star: {
    fontSize: 20,
  },
});