import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './index.style';
import Wall from '@src/components/Wall';
import Board from '@src/components/Board';
import TimerBar from '@src/components/TimerBar';

class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Wall>
          <TimerBar />
          <Board />
        </Wall>
      </View>
    );
  }
}

export default Playground;
