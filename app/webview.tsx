import { useLocalSearchParams } from 'expo-router';
import NewsletterWebView from '@/components/NewsletterWebView';

export default function WebViewScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();

  if (!url) {
    return null;
  }

  return <NewsletterWebView url={url} />;
}
