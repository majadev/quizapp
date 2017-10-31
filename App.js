import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Start from './src/components/Start';
import QuestionList from './src/components/QuestionList';
import Help from './src/components/Help';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="start"
          component={Start}
          title="ComboQuiz"
          initial
        />
        <Scene
          key="question"
          component={QuestionList}
          title="ComboQuiz"
        />
        <Scene
          key="help"
          component={Help}
          title="Help"
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;