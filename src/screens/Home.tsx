import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonReva from '../Components/Revabutton';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
 const navigation = useNavigation(); // ✅ hook must be inside component

          return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View>
<Text>Home</Text>
      </View>
    
    </SafeAreaView>
   
  );
}


export default Home;