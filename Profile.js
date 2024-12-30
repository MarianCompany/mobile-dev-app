import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Avatar from './Avatar.js';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProfileInfo({
        name: 'Самойленко Марк',
        group: '221-321',
        email: 'example@example.com',
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Avatar 
            name={profileInfo.name} 
            size={75}
            fontsize={150}
            colors={['#f093fb', '#f5576c', '#649173', '#f9a825']}
          />
          <Text style={styles.infoItem}>Имя: {profileInfo.name}</Text>
          <Text style={styles.infoItem}>Группа: {profileInfo.group}</Text>
          <Text style={styles.infoItem}>E-mail: {profileInfo.email}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    padding: 12,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFF'
  }
});

export default Profile;
