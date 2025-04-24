import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

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
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text>Read More</Text>
      </TouchableOpacity>
    </View>
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
});
