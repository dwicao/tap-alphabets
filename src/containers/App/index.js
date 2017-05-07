// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import * as mainAction from '@src/actions';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Home from '@src/containers/Home';
import Playground from '@src/containers/Playground';

class App extends Component {
  constructor() {
    super();

    this.state = {
      scene: 'home'
    };

    this.toScene = this.toScene.bind(this);
  }

  getChildContext() {
    return { toScene: this.toScene };
  }

  toScene(scene) {
    this.setState({ scene });
  }

  renderScene() {
    switch(this.state.scene) {
      case 'home':
        return <Home />;

      case 'playground':
        return <Playground />;

      default:
        return <Home />;
    }
  }

  render() {
    return this.renderScene();
  }
}

App.childContextTypes = {
  toScene: PropTypes.func,
};

export default App;

// const mapStateToProps = state => ({
//   score: state.score,
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(mainAction, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
