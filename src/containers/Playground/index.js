import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Wall from '@src/components/Wall';
import Tile from '@src/components/Tile';
import TileBlank from '@src/components/TileBlank';
import styles from './index.style';

class Playground extends Component {
  render() {
    return (
      <Wall>
        <View style={styles.container}>
          <View style={styles.content}>
            <Tile text="A"/>
            <Tile text="A"/>
            <TileBlank />
            <Tile text="A"/>
            <Tile text="A"/>
            <Tile text="A"/>
            <TileBlank />
            <Tile text="A"/>
            <Tile text="A"/>
            <Tile text="A"/>
            <TileBlank />
            <Tile text="A"/>
            <TileBlank />
            <Tile text="A"/>
            <Tile text="A"/>
          </View>
        </View>
      </Wall>
    );
  }
}

export default Playground;
