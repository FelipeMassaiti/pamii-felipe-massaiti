import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Button title="Clique aqui" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
