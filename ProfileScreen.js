import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  titleFont: {
    color: "dodgerblue",
    fontSize: 40,
    fontFamily: 'AvenirNext-Bold'
  }
});

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
            <Text style={ styles.titleFont }>Profile Page</Text>
      </View>
    );
  }
}

export default ProfileScreen;