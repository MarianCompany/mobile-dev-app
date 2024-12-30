import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Clicker = () => {
  // Состояния для хранения данных
  const [clicks, setClicks] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickers, setAutoClickers] = useState(0);
  const [autoClickerCost, setAutoClickerCost] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setClicks(prevClicks => prevClicks + autoClickers);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClickers]);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + clickPower);
  };

  const buyAutoClicker = () => {
    if (clicks >= autoClickerCost) {
      setClicks(prevClicks => prevClicks - autoClickerCost);
      setAutoClickers(prevAutoClickers => prevAutoClickers + 1);
      setAutoClickerCost(prevCost => Math.floor(prevCost * 1.15));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кликер</Text>
      <Text style={styles.clickCount}>Счет: {clicks}</Text>
      <TouchableOpacity style={styles.clickButton} onPress={handleClick}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/logo.png')} 
            style={styles.logo}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.upgradeContainer}>
        <Text style={styles.upgradeButtonText}>Работяг: {autoClickers}</Text>
        <TouchableOpacity
          style={[styles.upgradeButton, clicks < autoClickerCost && styles.disabledButton]} 
          onPress={buyAutoClicker}
          disabled={clicks < autoClickerCost}
        >
          <Text style={styles.upgradeButtonText}>
            Купить работягу ({autoClickerCost})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1b1b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  clickCount: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFF'
  },
  clickButton: {
    padding: 10,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  upgradeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  upgradeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  upgradeButtonText: {
    color: 'white',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
});

export default Clicker;