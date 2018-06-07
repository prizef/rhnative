import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import * as Server from "./server";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    loginSuccess: ""
  };

  handleClick = () => {
    console.log('hello');
    Server.users_LogIn({
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        this.setState({
          email: "",
          password: "",
          loginSuccess: "Logged in!"
        }),
        this.props.navigation.navigate('ProfileScreen');
      })
      .catch(error => {
        this.setState({
          email: "",
          password: "",
          loginSuccess: "Log in failed!!!"
        });
        this.props.navigator.push("ProfileScreen");
      });
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
          <Text>MEMBER AREA</Text>
        </View>
        <View
          style={{
            height: 200,
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "silver"
          }}
        >
          <TextInput
            style={{ height: 50, borderColor: "black", borderWidth: 1 }}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Text>{"\n"}</Text>
          <TextInput
            style={{ height: 50, borderColor: "black", borderWidth: 1 }}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            title="Login"
            color="dodgerblue"
            onPress={this.handleClick}
          />
        </View>
        <View style={{ height: 120, backgroundColor: "white" }}>
          <Text>{this.state.loginSuccess && this.state.loginSuccess}</Text>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
