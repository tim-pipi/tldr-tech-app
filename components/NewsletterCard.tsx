import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import NewsletterWebView from '@/components/NewsletterWebView';

interface NewsletterCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function NewsletterCard({
  title,
  description,
  image,
  url,
}: NewsletterCardProps) {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsWebViewVisible(true)}>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isWebViewVisible}
        animationType="slide"
        onRequestClose={() => setIsWebViewVisible(false)}
      >
        <NewsletterWebView
          url={url}
          onClose={() => setIsWebViewVisible(false)}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
});
