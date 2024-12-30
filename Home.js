import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native';

const Home = () => {
  let platform, greetingText, imageSource;

  if (Platform.OS === 'web') {
    platform = 'Web';
    greetingText = 'WEB';
    imageSource = require('./assets/logo.png');
  } else if (Platform.OS === 'android') {
    platform = 'Android';
    greetingText = 'ANDROID';
    imageSource = require('./assets/logo.png');
  } else {
    platform = 'iPhone';
    greetingText = 'IPHONE';
    imageSource = require('./assets/logo.png');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{greetingText}</Text>
      </View>
      <View style={styles.contentArea}>
        <Image source={imageSource} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#1b1b1b"
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF'
  },
  contentArea: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default Home;
