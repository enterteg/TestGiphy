import { Link } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/giphy">
        <Text style={{ fontWeight: "bold" }}>Open gif selector</Text>
      </Link>
      <Text style={{ padding: 40 }}>
        To test crash:
        {"\n\n"}
        1. Open gif selector
        {"\n\n"}
        2. Wait for gifs to load
        {"\n\n"}
        3. Scroll the list of gifs
        {"\n\n"}
        4. When list is still scrolling - close the gif selector.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    flex: 1,
  },
});
