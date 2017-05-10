import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mainAction from '@src/actions';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { width } from 'react-native-dimension';
import styles from './index.style';
import Wall from '@src/components/Wall';
import Tile from '@src/components/Tile';
import { getRandomTileColor, getAlphabet } from '@src/utils/board';

class Home extends Component {
  constructor() {
    super();

    this.alphabetNext = 1;

    this.state = {
      alphabet: getAlphabet(0),
      tileColor: getRandomTileColor(),
    }

    this.pressStart = this.pressStart.bind(this);
    this.pressTopTile = this.pressTopTile.bind(this);
  }

  pressTopTile() {
    const { tileColor, alphabetIndex } = this.state;

    this.setState({
      alphabet: getAlphabet(this.alphabetNext),
      tileColor: getRandomTileColor([tileColor]),
    });

    if (this.alphabetNext < 25) {
      this.alphabetNext++;
    } else {
      this.alphabetNext = 0;
    }
  }

  pressStart() {
    this.context.toScene('playground');
  }

  render() {
    const { tileColor, alphabet } = this.state;

    return (
      <Wall>
        <View style={styles.section}>
          <View style={styles.sectionTop}>
            <Tile
              text={alphabet}
              color={tileColor}
              fadeIn={false}
              onPress={this.pressTopTile}
            />
            <Text style={styles.title}>
              Tap Alphabets
            </Text>
          </View>
          <Tile
            text='START'
            fadeIn={false}
            width={width(50)}
            onPress={this.pressStart}
          />
        </View>
      </Wall>
    );
  }
}

Home.contextTypes = {
  toScene: PropTypes.func,
};

const mapStateToProps = state => ({
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mainAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
