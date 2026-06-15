import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constans/theme";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function HomeScreen() {
  const context = useContext(MovieContext);

  if (!context) {
    return null;
  }

  const {watchedMovies} = context;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Tracker 🎬</Text>

      <Text style={styles.subtitle}>꧁⋆ Welcome! ⋆꧂</Text>
      <Text style={styles.p}>
        to your movie collection
        {'\n'}Track, watch and rate your movies
      </Text>

      <Text style={styles.counter}> 🍿 Movies watched: {watchedMovies.length} 🍿 </Text>

      <Text style={styles.about}>
        This app lets you add the movies you want to watch, 
        so that you don't forget them. Then click the button, 
        once you've actually seen the movie, to save your history.
        {'\n'}{'\n'}✨🎞️ Enjoy your movie time! 🎞️✨
      </Text>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: colors.text,
  },
  p: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
  counter: {
    fontSize: 18,
    color: colors.text,
    marginTop: 40,
    marginBottom: 20,
  },
  about: {
    color: colors.text,
    textAlign: "center",
    marginTop: 40,
  },
});