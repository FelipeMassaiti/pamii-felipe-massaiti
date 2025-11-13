import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputComponentProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default InputComponent;