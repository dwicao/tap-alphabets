import React, { Component, PropTypes } from 'react';
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

    this.onPressPlay = this.onPressPlay.bind(this);
    this.open = this.open.bind(this);
    this.clode = this.close.bind(this);
  }

  open() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: false });
  }

  onPressPlay() {
    this.close();
    this.props.onPressPlay();
  }

  render() {
    return (
      <Modal
        animationType='fade'
        visible={this.state.visible}
        onRequestClose={()=>{}}
        transparent
      >
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
              toBlank={false}
              onAfterAnimation={this.onPressPlay}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

ModalEndGame.defaultProps = {
  onPressPlay: () => {},
};

ModalEndGame.propTypes = {
  onPressPlay: PropTypes.func,
};

export default ModalEndGame;
