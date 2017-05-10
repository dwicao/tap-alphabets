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

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
    }

    this.animPress = new Animated.Value(0);
    this.animOpacity = new Animated.Value(0);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { fadeIn } = this.props;

    this.animationHelper(this.animPress, 1, 50);
    
    setTimeout(() => {
      if (fadeIn) this.animationHelper(this.animOpacity, 1, 1000);
      this.animationHelper(this.animPress, 0, 50);
      this.props.onPress();
    }, 100);

    this.setState({ isClicked: true });
  }

  render() {
    const animPress = this.animPress.interpolate({
      inputRange: [0, 1],
      outputRange: [-width(25), -width(22.5)]
    });

    const animOpacity = this.animOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });

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
                top: animPress,
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
  onPress: () => {},
  color: '#aaaaaa',
  fadeIn: true,
};

Tile.propTypes = {
  width: PropTypes.number,
  onPress: PropTypes.func,
  color: PropTypes.string,
  fadeIn: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Tile;
