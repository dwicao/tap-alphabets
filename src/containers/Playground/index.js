import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';
import Wall from '@src/components/Wall';
import Board from '@src/components/Board';
import TimerBar from '@src/components/TimerBar';

class Playground extends Component {
  componentDidMount() {
    setInterval(() => this.board.reRender(), 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Wall>
          <TimerBar />
          <Board ref={el => this.board = el}/>
        </Wall>
      </View>
    );
  }
}

export default Playground;
