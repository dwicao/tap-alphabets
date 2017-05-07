import React, { Component } from 'react';
import { Image } from 'react-native';
import bg from '@src/images/background.png';
import styles from './index.style';

class Wall extends Component {
  render() {
    return (
      <Image source={bg} style={styles.img}>
          {this.props.children}
      </Image>
    );
  }
}

export default Wall;