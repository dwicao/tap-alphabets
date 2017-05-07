import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Wall from '@src/components/Wall';

class Playground extends Component {
  render() {
    return (
      <Wall>
        <Text>Playground</Text>
      </Wall>
    );
  }
}

export default Playground;
