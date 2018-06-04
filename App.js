import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

export default class App extends React.Component {
  render() {
    return (
    <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen }
});