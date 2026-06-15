import { StyleSheet, Text, View } from "react-native";

type HomeScreenProps = {
  watchedMovies: string[];
};

export default function HomeScreen({ watchedMovies }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Tracker 🎬</Text>

      <Text style={styles.subtitle}>꧁⋆ Welcome! ⋆꧂</Text>

      <Text style={styles.counter}>Movies watched: {watchedMovies.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
  },
  counter: {
    fontSize: 18,
  },
});