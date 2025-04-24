import NewsletterCard from '@/components/NewsletterCard';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        {Array.from({ length: 100 }).map((_, index) => (
          <NewsletterCard
            key={index}
            title="What is Hyperwood? (Website)"
            description="Hyperwood is an open-source system for crafting furniture from simple wooden slats that empowers anyone to build robust furniture using minimal tools and locally sourced materials."
            image="https://picsum.photos/200/300"
            url="https://picsum.photos/200/300"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});
