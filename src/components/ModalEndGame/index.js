import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
} from 'react-native';
import { width } from 'react-native-dimension';
import styles from './index.style';
import Tile from '@src/components/Tile';
import { getRandomTileColor } from '@src/utils/board';

class ModalEndGame extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };
  }

  open() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <Modal visible={this.state.visible} transparent>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={[styles.txt, styles.topHeader]}>
              Marvelous!
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.txt, styles.header]}>
              Your Score
            </Text>
            <Text style={[styles.txt, styles.score]}>
              2048
            </Text>
          </View>
          <View style={styles.section}>
            <Tile
              text='Play Again'
              color={getRandomTileColor()}
              width={width(70)}
              fadeIn={false}
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalEndGame;
