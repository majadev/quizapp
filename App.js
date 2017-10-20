import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import QuestionList from './src/components/QuestionList';

export default class App extends React.Component {

  _onPressLearnMore() {
    Alert.alert('on Press!');
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To</Text>
        <Text>ComboQuiz</Text>
        <Button   
          onPress={this._onPressLearnMore}
          title="START QUIZ"
          color="#841584"
          accessibilityLabel="Start quiz with this button"
        />
        <QuestionList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
