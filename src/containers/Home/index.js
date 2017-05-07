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

class Home extends Component {
  constructor() {
    super();

    this.pressStart = this.pressStart.bind(this);
  }

  pressStart() {
    this.context.toScene('playground');
  }

  render() {
    return (
      <Wall>
        <View style={styles.section}>
          <Tile text='A'/>
          <Text style={styles.title}>
            Tap Alphabets
          </Text>
        </View>
        <View style={styles.section}>
          <Tile text='START' width={width(50)} onPress={this.pressStart}/>
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
