import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import * as Server from "./server";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    userTypes: []
  };

  componentDidMount() {
    Server.userTypes_getAll().then(response => {
      const userTypes = response.data.items;
      this.setState({ userTypes });
    });
  }

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
          <Text>MEMBER AREA</Text>
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
          <Button
            title="Submit"
            color="dodgerblue"
            onPress={() => this.buttonWasClicked}
          />
          {this.state.userTypes && this.state.userTypes.map(c => <Text key={c.userTypeId}>{c.name}</Text>)}
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
