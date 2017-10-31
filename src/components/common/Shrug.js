import React, { Component } from 'react';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';
 
export default class Shrug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
 
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
 
  render() {
    return (
      <Animation
        style={{
          width: 100,
          height: 60,
        }}
        source={require('./shrug.json')}
        progress={this.state.progress}
      />
    );
  }
}