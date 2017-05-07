import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mainAction from '@src/actions';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Wall from '@src/components/Wall';
import styles from './index.style';

class Home extends Component {
  render() {
    return (
      <Wall>
        <View style={styles.section}>
          <Text>mantap</Text>
        </View>
        <View style={styles.section}>
          <Text>mantap</Text>
        </View>
      </Wall>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mainAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
