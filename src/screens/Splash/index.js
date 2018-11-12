import React, { Component } from "react";
import { View, Image, StatusBar } from "react-native";
import styles from './Styles';

import logo from "../../../assets/logo.png";

class SplashScreen extends Component {

  componentDidMount() {
    StatusBar.setHidden(true);
    this.handleChangeScreen()
  }

  handleChangeScreen = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Steps')
    }, 2000)
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      </View>
    );
  }
}

export default SplashScreen;