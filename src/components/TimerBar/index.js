import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import styles from './index.style';
import timer from '@src/config/timer';
import { width } from 'react-native-dimension';

class TimerBar extends Component {
  constructor() {
    super();

    this.animWidth = new Animated.Value(0);
  }

  componentDidMount() {
    this.createAnimation(this.animWidth, 1, timer.LIMIT);
  }

  createAnimation(obj, toValue, duration) {
    Animated.timing( obj, { toValue, duration, useNativeDriver: true }).start();
  }

  render() {
    const endLine = -width(100);

    const animWidth = this.animWidth.interpolate({
      inputRange: [0, 1],
      outputRange: [0, endLine]
    });

    return (
      <Animated.View style={[styles.container, { transform: [{ translateX: animWidth }] }]} />
    );
  }
}

export default TimerBar;
