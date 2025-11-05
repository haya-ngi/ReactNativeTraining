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
  SafeAreaView 
} from 'react-native';
import Revatextfield from '../Components/Revatextfield';
import ButtonReva from '../Components/Revabutton';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button pressed');
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Implement your actual login logic here (API call, navigation, etc.)
    Alert.alert('Success', `Attempting to log in as ${email}`);
  };

  return (
        <View style={styles.outerContainer}>
      <View style={styles.topHeader}> 
  
          <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.getStartedText}>Let's get started</Text> 
          </View>
<View style={styles.graphicContainer}>
      {/* <PlantElements width={120} height={120} /> */}


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
        onPress={ handleLogin}
      />
    </View>
     </View>
   
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
    flex: 1,
   backgroundColor: 'white', 

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topHeader: {
    backgroundColor: '#141313ff', 
    flexDirection: 'row',
    // alignItems: 'flex-start',
    paddingTop: 100,
    paddingBottom: 60,
    width: '100%',
  },
  textContainer: {
    // flex: 3, 
    paddingLeft: 20,
   paddingTop: 20,
  },
  welcomeText: {
    fontSize: 32,
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
    // flex: 1.5, 
    // alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingRight: 15,
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
    
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
   
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
      fontSize: 22,
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