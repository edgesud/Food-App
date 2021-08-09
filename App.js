import React, { Component } from 'react';
import { Text,View,StyleSheet,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from './src/global/style';
import RootNavigator from "./src/Navigation/Rootnavigator"
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={color.statusbar}/>
       <RootNavigator/>
      </View>
    );
  }
}

export default App;


const styles= StyleSheet.create({
  container:{
    flex:1,
  }
})