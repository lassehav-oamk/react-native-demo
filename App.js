import React from 'react';
import Login from './views/Login';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: Login
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
