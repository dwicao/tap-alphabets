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
import ModalEndGame from '@src/components/ModalEndGame';

class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Wall>
          <TimerBar ref={el => this.timer = el}/>
          <Board ref={el => this.board = el}/>
          <ModalEndGame ref={el => this.modal = el}/>
        </Wall>
      </View>
    );
  }
}

export default Playground;
