import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import uuid from 'uuid';
import Wall from '@src/components/Wall';
import Tile from '@src/components/Tile';
import TileBlank from '@src/components/TileBlank';
import styles from './index.style';
import { shuffleArray, getRandomInt } from '@src/utils/board';
import colorTiles from '@src/config/colors';
import alphabets from '@src/config/char';
import tiles from '@src/config/tiles';

class Playground extends Component {
  renderTiles() {
    let element = [];
    let newColorTiles = colorTiles.slice(0);
    let newAlphabets = alphabets.slice(0);

    shuffleArray(newColorTiles);
    shuffleArray(newAlphabets);

    for ( let i = 0; i < tiles.max; i++ ) {
      element.push(<Tile key={uuid.v4()} color={newColorTiles.pop()} text={newAlphabets.pop()} />);
    }

    return element.slice(0, getRandomInt(tiles.min, tiles.max));
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
