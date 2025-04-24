import { View, Text, StyleSheet, Image } from 'react-native';

interface NewsletterCardProps {
  title: string;
  description: string;
  image: string;
}

export default function NewsletterCard({
  title,
  description,
  image,
}: NewsletterCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{title}</Text>
      <Text>{description}</Text>
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
