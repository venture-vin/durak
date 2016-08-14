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
  ListView,
  TouchableHighlight,
  Navigator
} from 'react-native';


import Tutorial from './tutorial'
import Main from './main'

class Durak extends Component {
  renderScene(route, navigator) {
    if (route.name === 'main') {
      return <Main navigator={navigator} {...route.passProps} />
    }
    else if (route.name == 'tutorial'){
      return <Tutorial navigator={navigator} {...route.passProps} />
    }
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
      // passProps: {name: routeName},
    })
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{name:'main'}}
        renderScene={this.renderScene.bind(this)} />
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('Durak', () => Durak);
