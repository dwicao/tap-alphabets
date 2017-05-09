import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Wall from '@src/components/Wall';
import Tile from '@src/components/Tile';
import TileBlank from '@src/components/TileBlank';
import styles from './index.style';
import { getRandomAlphabet, getRandomTileColor } from '@src/utils/board';

class Playground extends Component {
  renderTiles() {
    let element = [];

    for ( let i = 0; i < 12; i++ ) {
      element.push(<Tile key={i} color={getRandomTileColor()} text={getRandomAlphabet()} />);
    }

    return element;
  }

  render() {
    return (
      <Wall>
        <View style={styles.container}>
          <View style={styles.content}>
            {this.renderTiles()}
          </View>
        </View>
      </Wall>
    );
  }
}

export default Playground;
