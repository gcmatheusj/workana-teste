import React, { Component } from "react";
import { Text, Image, View, TouchableOpacity, StatusBar } from "react-native";
import { Icon } from 'native-base';
import SwiperFlatList from "react-native-swiper-flatlist";
import styles from './Styles';

import logo from "../../../assets/logo.png";

class StepsScreen extends Component {

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  handleChangeScreen = () => {
    this.props.navigation.navigate('Login')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.steps}>
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={0}
            showPagination
            paginationStyleItem={styles.pag}
            paginationActiveColor="#E7397E"
          >
            <View style={[styles.child]}>
              <Image source={logo} style={styles.logo} />
              <View style={styles.stepText}>
                <Text style={styles.text}>
                  Todos os serviços na palma da sua mão
                </Text>
              </View>
            </View>
            <View style={[styles.child]}>
              <Image source={logo} style={styles.logo} />
              <View style={styles.stepText}>
                <Text style={styles.text}>
                  Agilidade e conforto na sua casa
                </Text>
              </View>
            </View>
            <View style={[styles.child]}>
              <Image source={logo} style={styles.logo} />
              <View style={styles.stepText}>
                <Text style={styles.text}>
                  As melhores profissionais do mercado
                </Text>
              </View>
            </View>
          </SwiperFlatList>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.expandir}>
              <Text style={styles.expandirText}>Expandir</Text>
              <Icon name="ios-arrow-down" style={{ color:'#E7397E'}} />
            </TouchableOpacity>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={this.handleChangeScreen}>
              <Text style={styles.buttonText}>Ir Para Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default StepsScreen
