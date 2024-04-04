import { useRouter } from 'expo-router';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  GiphyContent,
  GiphyGridView,
  GiphyMediaType,
  GiphySDK,
} from '@giphy/react-native-sdk';

GiphySDK.configure({ apiKey: process.env.EXPO_PUBLIC_GIPHY_API_KEY });

export default function Giphy() {
  const router = useRouter();

  function onSelectGif() {
    router.back();
  }

  return (
    <View style={styles.flex}>
      <GiphyGridView
        style={styles.flex}
        content={GiphyContent.search({
          searchQuery: "party",
          mediaType: GiphyMediaType.Gif,
        })}
        cellPadding={12}
        fixedSizeCells={true}
        onMediaSelect={onSelectGif}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
