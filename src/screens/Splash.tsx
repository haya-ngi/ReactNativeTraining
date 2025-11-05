import React, { useEffect } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to Login after 2s
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
     <Text style = {styles.logo}> Welcome To Reva ! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0d0dff', // or your brand color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    color: '#ffffff',
    fontSize: 30
  },
});

export default Splash;
