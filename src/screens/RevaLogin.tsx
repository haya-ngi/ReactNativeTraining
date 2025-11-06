import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Image, 
  Dimensions, 
   
} from 'react-native';
import Revatextfield from '../Components/Revatextfield';
import ButtonReva from '../Components/Revabutton';
import {StackNavigationProp} from '@react-navigation/stack';
import PlantElement from '../assets/svgs/plantelements.svg'
import PlantElement1 from '../assets/svgs/plantelement1.svg'
import { SafeAreaView } from 'react-native-safe-area-context';



const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
     navigation.navigate('HomeTabs'); 
    Alert.alert('Success', `Attempting to log in as ${email}`);
  };

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: '#ffffff' }}>
   <View style={styles.outerContainer}>
      <View style={styles.topHeader}> 
  
          <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.getStartedText}>Let's get started</Text> 
          </View>
<View style={styles.graphicContainer}>
  {/* <PlantElement1  width={120} height={120} /> */}
       <PlantElement1 style={{ right: -50, bottom: -10 }} />
          <PlantElement style={{ bottom: -5 }} />
      {/* <PlantElement1 />
      <PlantElement /> */}


</View>

      </View>


      <View style={styles.bottomSection} />
      <View style ={styles.bottomTitleFieldView}> 
      <Text style = {styles.bottomTitle}>Enter your registered mobile number</Text>
       <Revatextfield
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Revatextfield
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        
        <ButtonReva 
        title="Login"
        backgroundColor="#1b1919ff"
        onPress={() => handleLogin()}
      />
    </View>
     </View>
    </SafeAreaView>
     
   
  );
};

const styles = StyleSheet.create({
button: {
    width: '100%',
    backgroundColor: '#191a1bff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  }, 
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
 outerContainer: {
    // justifyContent: 'flex-end',
   backgroundColor: 'white', 
 
  },
  topHeader: {
    backgroundColor: '#141313ff', 
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom : 10,
    width: '100%',
    height: 220,
  },
  textContainer: {
    // flex: 3, 
    paddingLeft: 10,
    marginBottom : 50
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  getStartedText: {
    fontSize: 20,
    color: 'white',
  },
  bottomTitle: {
    fontSize: 20,
    // padding : 20,
    color: '#1E1E1E',
  },
  graphicContainer: {
    flexDirection: 'row',
    width: '100%',
     marginBottom : 30,
    // alignItems : 'flex-end',
    // paddingLeft: 20,

       justifyContent: 'flex-start',
    alignItems: 'center',
      },

  bottomTitleFieldView: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    // flex: 1,
    backgroundColor: 'white', 
  },
bottomSection: {
    marginTop: -30, 
    backgroundColor: 'white', 
    // flex: 1,
    
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '100%' ,
    paddingTop: 30, 
    paddingHorizontal: 20,
  },
  formTitle: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#1E1E1E',
      marginBottom: 30,
  },
  input: {
    height: 55,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#5F5D58',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;