import React, { Component} from "react";
import { View, Image, TextInput, Text, TouchableOpacity, StatusBar } from "react-native";
import { Divider } from "react-native-elements";
import styles from "./Styles";

import logo from "../../../assets/logo.png";
import facebook from '../../../assets/facebook-icon.png'

class LoginScreen extends Component {

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  handleChangeScreen = () => {
    this.props.navigation.push('Splash')
    StatusBar.setHidden(true);
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}>
            "Os botões desta tela são apenas ilustrativos para este teste"
          </Text>
        </View>
        <View style={styles.login}>
          <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="black" autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="black" autoCapitalize="none" />
          <TouchableOpacity style={styles.button} onPress={this.handleChangeScreen}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={styles.buttonTextCadastrar}>Não tem uma conta? Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.dividerFacebook}>
            <Divider style={styles.divider} />
            <Text style={styles.textFace}>ou entre com</Text>
            <Divider style={styles.divider} />
          </View>
          <View style={styles.facebookIcon}>
            <Image source={facebook} />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
