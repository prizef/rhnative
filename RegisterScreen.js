import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Picker,
  Button,
  Switch
} from "react-native";
import * as Server from "./server";

class RegisterScreen extends Component {
  state = {
    userTypes: [],
    userTypeId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    tos: false,
    newsletter: false
  };

  handleClick = () => {
    console.log(this.state.tos);
  };

  componentDidMount() {
    Server.userTypes_getAll()
      .then(response => {
        console.log(response);
        const userTypes = response.data.items;
        this.setState({ userTypes });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ScrollView>
        <Picker
          selectedValue={this.state.userTypeId}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ userTypeId: itemValue })
          }
        >
          <Picker.Item label="User Type (Required)" value="0" />
          {this.state.userTypes.map((u, i) => {
            return <Picker.Item key={i} value={i + 1} label={u.name} />;
          })}
        </Picker>
        <TextInput
          style={{ height: 50, borderColor: "black", borderWidth: 1 }}
          placeholder="First Name"
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <Text>{"\n"}</Text>
        <TextInput
          style={{ height: 50, borderColor: "black", borderWidth: 1 }}
          placeholder="Last Name"
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <Text>{"\n"}</Text>
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
        <Text>{"\n"}</Text>
        <TextInput
          style={{ height: 50, borderColor: "black", borderWidth: 1 }}
          placeholder="Confirm Password"
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          value={this.state.confirmPassword}
        />
        <Text>
          TOS
          <Switch
            value={this.state.tos}
            onValueChange={value => this.setState({ tos: value })}
          />
        </Text>
        <Text>
          Newsletter
          <Switch
            value={this.state.newsletter}
            onValueChange={value => this.setState({ newsletter: value })}
          />
        </Text>
        <Button title="Login" color="dodgerblue" onPress={this.handleClick} />
      </ScrollView>
    );
  }
}

export default RegisterScreen;
