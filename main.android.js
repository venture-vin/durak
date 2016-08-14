import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  AsyncStorage,
  Navigator,
  TextInput,
  Image
} from 'react-native';

const categories = ['Tutorial', 'Play'];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      search: "",
      isLoggenIn: "",
      showProgress: false,
      accessToken: "",
    };
  }

  componentWillMount() {
     console.log("constructor")
  }

  componentDidMount() {
    console.log("constructor")
    this.fetchData();
  }

  redirect(routeName){
    name: routeName
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(categories),
      loaded: true,
    });
  }

  navigate(routeName, playCategory) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        category: playCategory,
        results: playCategory
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
      Choose Play Mode
      </Text>
      <View style={styles.ListView}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderCategory.bind(this)}
      />
      </View>
      </View>
    );
  }

renderCategory(category) {
  return (

    <View style={styles.listContainer}>
    <View style={styles.category}>

    <TouchableHighlight underlayColor={'transparent'}

    onPress={this.navigate.bind(this, 'category', category)}
    >
    <Text style={styles.title}>{category}</Text>
    </TouchableHighlight>
    </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#B8D8D8',
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  ListView: {
    flex: 1,
  },
  category: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#668cff',
    backgroundColor: 'white'
  },

  listContainer: {
  flex: 1,
  alignItems: 'stretch',
  backgroundColor: '#B8D8D8',
  marginTop: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default Main
