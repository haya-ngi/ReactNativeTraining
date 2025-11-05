import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface ButtonRevaProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
}

const ButtonReva: React.FC<ButtonRevaProps> = ({
  title,
  onPress,
  backgroundColor = '#111213ff', 
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ButtonReva;
