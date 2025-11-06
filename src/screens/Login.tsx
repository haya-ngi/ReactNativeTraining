import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const EmailTextField = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>
    );
  };
  const PasswordTextfield = () => {
    return (
      <View>
        <TextInput
         style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
    );
  }
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', ' enter both effmail and password');
      return;
    }
    Alert.alert('Success', `Logged in as ${email}`);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <EmailTextField></EmailTextField>
        <PasswordTextfield></PasswordTextfield>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fafafa',
    borderRadius: 16,
    padding: 24,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 32,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
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
  footerText: {
    marginTop: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default LoginScreen;
