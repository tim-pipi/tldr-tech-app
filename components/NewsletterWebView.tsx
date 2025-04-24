import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

interface NewsletterWebViewProps {
  url: string;
}

export default function NewsletterWebView({ url }: NewsletterWebViewProps) {
  return (
    <WebView
      style={styles.container}
      source={{ uri: url }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
