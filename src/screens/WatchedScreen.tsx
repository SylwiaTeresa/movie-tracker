import { Text, View } from "react-native";

type WatchedScreenProps = {
  watchedMovies: string[];
};

export default function WatchedScreen({
  watchedMovies,
}: WatchedScreenProps) {
  return (
    <View>
      <Text>Watched Movies</Text>

      {watchedMovies.map((movie) => (
        <Text key={movie}>✅ {movie}</Text>
      ))}
    </View>
  );
}