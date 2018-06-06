import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ProfileScreen from "./ProfileScreen";

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
  RegisterScreen: { screen: RegisterScreen },
  Profile: { screen: ProfileScreen }
});