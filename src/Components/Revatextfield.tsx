import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface RevaTextField {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const RevaTextField: React.FC<RevaTextField> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000000ff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#dddcdcff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    color: '#373434ff',
  },
});

export default RevaTextField;
