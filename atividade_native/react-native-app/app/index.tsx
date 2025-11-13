import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import TextComponent from "./components/TextComponent";
import AppStyles from "./styles/AppStyles";

export default function App() {
  return (
    <View style={AppStyles.container}>
      <TextComponent content="Welcome to the React Native App!" />
      <InputComponent placeholder="Type something..." onChangeText={(text) => console.log(text)} />
      <ButtonComponent title="Submit" onPress={() => alert("Button Pressed!")} />
    </View>
  );
}