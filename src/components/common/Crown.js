import React, { Component } from 'react';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';
 
export default class Crown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
 
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
    }).start();
  }
 
  render() {
    return (
      <Animation
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./star.json')}
        progress={this.state.progress}
      />
    );
  }
}