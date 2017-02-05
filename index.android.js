/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight, TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

class P extends Component {
  render() {
    return (
      <Text>{this.props.title}!</Text>
    );
  }
}

export default class newrn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Ankit',
      text:'',
    }
  }

  handleToggle(ev) {
    this.setState({ name: this.state.text})
  }
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to react native {this.state.name}
        </Text>

        <View style={styles.menucontainer}>
          <View style={{ width: 70, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 70, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 70, height: 50, backgroundColor: 'steelblue' }} />
          <View style={{ width: 70, height: 50, backgroundColor: 'lightblue' }} />
          <View style={{ width: 70, height: 50, backgroundColor: 'blue' }} />
        </View>
      
    <View style={styles.descriptioncontainer}>
      <Text style={styles.welcome2}> The description conatiner comtains all the related information about this App/Project  </Text>
    </View>

      <View style={styles.imageview}>
       <Image source={github} style={{width: 40, height: 40}} />
      </View>

      <View style={styles.buttonview}>
       <TextInput
          style={{height: 50,width:200}}
          placeholder="Name"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity onPress={this.handleToggle.bind(this)}>
          <Text name="myname" style={styles.butttontext} >Togggle</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
let github = {
  uri: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexGrow: 1,
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fcfcfc',
  },
  welcome:{
    fontSize: 24,
    textAlign: 'center',
   // color: '#eee',
    margin: 10,
  },
  menucontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginTop: 5,
   //marginBottom: 5,
    height:100,
    backgroundColor:'#DB0A5B',
  },
  descriptioncontainer: {
    flex:1,
    backgroundColor: '#674172',
  },
  welcome2:{
    fontSize: 24,
    textAlign: 'center',
    color: '#eee',
    margin: 10,
  },
  imageview:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:'red',
     alignItems: 'center',
  },
  buttonview: {
   flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butttontext: {
    //flex:1,
    textAlign: 'center',
    padding:5,
    marginTop:20,
    justifyContent:'center',
    color: '#eee',
    borderRadius:2,
    height: 30,
    backgroundColor:'#3A539B',
  }
});

AppRegistry.registerComponent('newrn', () => newrn);
