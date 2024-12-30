import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Settings = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FCFCFC');

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD133', '#33FFF5', '#696969', '#E74C3C', '#E0FFFF', '#9932CC'];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Настройки цвета</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => setBackgroundColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#1b1b1b'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorButton: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default Settings;
