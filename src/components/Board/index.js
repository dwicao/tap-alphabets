import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import uuid from 'uuid';
import Tile from '@src/components/Tile';
import TileBlank from '@src/components/TileBlank';
import styles from './index.style';
import { shuffleArray, getRandomInt } from '@src/utils/board';
import colorTiles from '@src/config/colors';
import alphabets from '@src/config/char';
import tiles from '@src/config/tiles';

class Board extends Component {
  constructor() {
    super();

    this.totalTiles = 0;
    this.tilePressed = 0;

    this.state = {};

    this.animOpacity = new Animated.Value(0);
    this.renderTiles = this.renderTiles.bind(this);
    this.onPressTile = this.onPressTile.bind(this);
  }

  startAnimation() {
    Animated.timing(this.animOpacity, { toValue: 1, duration: 500 }).start();
  }

  componentDidMount() {
    this.startAnimation();
  }

  onPressTile() {
    this.tilePressed++;
    if (this.tilePressed === this.totalTiles){
      this.animOpacity.setValue(0);
      this.reRender();
    }
  }

  reRender() {
    this.tilePressed = 0;
    this.startAnimation();
    this.setState(this.state);
  }

  renderTiles() {
    let element = [];
    let newColorTiles = colorTiles.slice(0);
    let newAlphabets = alphabets.slice(0);

    shuffleArray(newColorTiles);
    shuffleArray(newAlphabets);

    for ( let i = 0; i < tiles.max; i++ ) {
      const lastColorTiles = newColorTiles[newColorTiles.length - 1];
      const lastAlphabet = newAlphabets[newAlphabets.length - 1];

      element.push(
        <Tile
          onPress={this.onPressTile}
          key={uuid.v4()}
          color={lastColorTiles}
          text={lastAlphabet} />
      );

      newColorTiles.pop();
      newAlphabets.pop();
    }

    const newElement = element.slice(0, getRandomInt(tiles.min, tiles.max));
    this.totalTiles = newElement.length;

    return newElement;
  }

  render() {
    const animOpacity = this.animOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <Animated.View style={[styles.container, { opacity: animOpacity }]}>
        <View style={styles.content}>
          {this.renderTiles()}
        </View>
      </Animated.View>
    );
  }
}

export default Board;
