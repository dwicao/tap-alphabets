import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './index.style';
import { width } from 'react-native-dimension';

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
    }

    this.animPress = new Animated.Value(0);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.animationHelper(this.animPress, 1, 50);
    
    setTimeout(() => {
      this.animationHelper(this.animPress, 0, 50);
    }, 100);

    this.setState({ isClicked: true });
  }

  animationHelper(obj, toValue, duration) {
    Animated.spring(
        obj,
        {
          toValue,
          duration,
        }
      ).start();
  }

  render() {
    const animPress = this.animPress.interpolate({
      inputRange: [0, 1],
      outputRange: [-width(25), -width(22.5)]
    })

    return (
      <TouchableOpacity
        onPress={this.handleClick}
        activeOpacity={1}
        style={styles.size}
      >
        <View style={[styles.size, styles.primary]}/>
        <Animated.View
          style={[
            styles.size, styles.secondary, { top: animPress }
          ]}
        >
          <Text style={styles.alphabet}>
            A
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default Tile;