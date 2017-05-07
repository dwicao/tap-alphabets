// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as mainAction from '@src/actions';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Home from '@src/containers/Home';

class App extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

export default App;

// const mapStateToProps = state => ({
//   score: state.score,
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(mainAction, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
