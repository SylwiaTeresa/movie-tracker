import { Text, View } from "react-native";

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
    <View>
      <Text>Watched Movies</Text>

      {watchedMovies.map((movie) => (
        <View key={movie}>
          <Text>✅ {movie}</Text>

          <Text onPress={() => removedMovie(movie)}>Remove</Text>
        </View>
      ))}
    </View>
  );
}