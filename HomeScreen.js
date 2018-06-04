import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import "./background.png";

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

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={"stretch"}
          style={{ flex: 1 }}
          source={require("./background.png")}
        >
          <View
            style={{
              flex: 5,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={ styles.titleFont }>Recruit HUB</Text>
          </View>
          <View style={{ flex: 2 }} />
          <View style={{ flex: 3 }}>
            <Button
              title="Login"
              color="dodgerblue"
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            />
            <Button
              title="Register"
              color="dodgerblue"
              onPress={() => this.props.navigation.navigate("RegisterScreen")}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
