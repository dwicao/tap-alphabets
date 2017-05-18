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
    this.alphabetOnBoard = [];

    this.state = {};

    this.animOpacity = new Animated.Value(0);
    this.renderTiles = this.renderTiles.bind(this);
    this.onPressTile = this.onPressTile.bind(this);
  }

  startAnimation() {
    Animated.timing(this.animOpacity, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }

  componentDidMount() {
    this.startAnimation();
  }

  onPressTile(id) {
    const lastAlphabet = this.alphabetOnBoard[this.alphabetOnBoard.length - 1];
    const indexAlphabetPressed = alphabets.join('').indexOf(id);
    
    if (indexAlphabetPressed === lastAlphabet) {
      this.tilePressed++;
      this.alphabetOnBoard.pop();
    } else {
      // alert ('Wrong!')
    }

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
    let newColorTiles = shuffleArray(colorTiles.slice(0));
    let newAlphabets = shuffleArray(alphabets.slice(0));

    for (let i = 0; i < newAlphabets.length; i++) {
      const lastColorTiles = newColorTiles[newColorTiles.length - 1];
      const lastAlphabet = newAlphabets[newAlphabets.length - 1];

      element.push(
        <Tile
          onAfterAnimation={() => this.onPressTile(lastAlphabet)}
          key={uuid.v4()}
          color={lastColorTiles}
          text={lastAlphabet} />
      );

      newColorTiles.pop();
      newAlphabets.pop();
    }

    const newElement = element.slice(0, getRandomInt(tiles.min, tiles.max));
    this.totalTiles = newElement.length;
    this.alphabetOnBoard = newElement.map(
        el => alphabets.join('').indexOf(el.props.text)
      ).sort((a, b) => b - a);


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
