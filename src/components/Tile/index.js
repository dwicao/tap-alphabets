import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './index.style';
import shadeColor from '@src/utils/colors';
import { width } from 'react-native-dimension';
import TileBlank from '../TileBlank';

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      isBlank: false,
    }

    this.animPress = new Animated.Value(0);
    this.animOpacity = new Animated.Value(0);
    this.handleClick = this.handleClick.bind(this);
  }

  createAnimation(obj, toValue, duration, useNativeDriver = false) {
    Animated.spring(obj, { toValue, duration, useNativeDriver }).start();
  }

  handleClick() {
    const { fadeIn } = this.props;

    this.createAnimation(this.animPress, 1, 100, true);
    
    setTimeout(() => {
      if (fadeIn) this.createAnimation(this.animOpacity, 1, 100);
      this.createAnimation(this.animPress, 0, 100, true);
    }, 100);

    setTimeout(() => {
      if (this.props.toBlank) {
        this.setState({ isBlank: true })
      }

      this.props.onAfterAnimation();
    }, 200);

    this.setState({ isClicked: true });
  }

  render() {
    const animPress = this.animPress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width(2.5)]
    });

    const animOpacity = this.animOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

    if (this.state.isBlank) return <TileBlank />;

    return (
      <Animated.View style={{ opacity: animOpacity }}>
        <TouchableOpacity
          onPress={this.handleClick}
          activeOpacity={1}
          style={[styles.container, { width: this.props.width }]}
        >
          <View style={[styles.size, styles.primary, {
            width: this.props.width, backgroundColor: shadeColor(this.props.color, -20)
          }]}/>
          <Animated.View
            style={[
              styles.size, styles.secondary, {
                transform: [{ translateY: animPress }],
                backgroundColor: shadeColor(this.props.color),
                width: this.props.width,
          }]}>
            <Text style={styles.alphabet}>
              {this.props.text}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Tile.defaultProps = {
  width: width(25),
  onAfterAnimation: () => {},
  color: '#aaaaaa',
  fadeIn: true,
  toBlank: true,
};

Tile.propTypes = {
  width: PropTypes.number,
  onAfterAnimation: PropTypes.func,
  color: PropTypes.string,
  fadeIn: PropTypes.bool,
  toBlank: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Tile;
