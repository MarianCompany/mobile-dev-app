import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Avatar = ({ name, size, colors, fontsize }) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const [randomColor] = useState(colors[Math.floor(Math.random() * colors.length)]); 

  return (
    <View style={[styles.container, { width: size, height: size, backgroundColor: randomColor }]}>
      <Text style={[styles.initials, { fontsize }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  initials: {
    fontWeight: 'bold',
    color: 'white',
  }
});

export default Avatar;
