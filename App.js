import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet } from 'react-native';

import Home from './Home';
import Settings from './Settings'
import Profile from './Profile'
import Clicker from './Clicker' 

const Drawer = createDrawerNavigator();

const LogoTitle = () => (
  <Image
    style={styles.logo}
    source={require('./assets/logo.png')}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Главная" 
          component={Home} 
          options={{
            headerRight: () => <LogoTitle />,
            headerRightContainerStyle: styles.headerRightContainer,
          }}
        />
        <Drawer.Screen name="Настройки" component={Settings} />
        <Drawer.Screen name="Профиль" component={Profile} />
        <Drawer.Screen name="Кликер" component={Clicker} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerRightContainer: {
    marginRight: 12,
  },
});

export default App;
