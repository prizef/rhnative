import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          backgroundColor: "lightgrey"
        }}
      >
        <View style={{ height: 120, backgroundColor: "yellowgreen" }}>
          MEMBER AREA
        </View>
        <View
          style={{
            height: 170,
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "silver"
          }}
        >
          <TextInput
            style={{ height: 50, borderColor: "black", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.email}
          />
          <TextInput
            style={{ height: 50, borderColor: "black", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.password}
          />
        </View>
        <View style={{ height: 120, backgroundColor: "white" }}>
          {" "}
          MEMBER AREA
        </View>
      </View>
    );
  }
}

export default LoginScreen;
