import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mainAction from '@src/actions';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Text>{JSON.stringify(this.props)}</Text>
        <TouchableOpacity onPress={() => this.props.actions.changeBestScore(12)}>
          <Text>Muantap</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mainAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
