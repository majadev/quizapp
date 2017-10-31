import React, { Component } from 'react';
import { View, Text, StyleSheet, List, TouchableOpacity, AccessibilityInfo } from 'react-native';
import QuestionDetails from './QuestionDetails';
import Spinner from './common/Spinner';
import Crown from './common/Crown';
import Shrug from './common/Shrug';
import { Actions } from 'react-native-router-flux';

class QuestionList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        screenReaderEnabled: false,
        questions: null,
        count: 1
      };
    }
      
  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'change',
      this._handleScreenReaderToggled
    );
  }

  shuffle(incorrect_answers){
    return incorrect_answers
    }

  _handleScreenReaderToggled = (isEnabled) => {
    this.setState({
      screenReaderEnabled: isEnabled,
    });
  }

  fetchData() {
    fetch('https://opentdb.com/api.php?amount=30&category=27')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
              questions: responseData.results,
              incorrect_answers: this.shuffle(responseData.results.incorrect_answers)
            });
          })
          .done();
      }

  componentDidMount() {

    this.fetchData();

    AccessibilityInfo.addEventListener(
      'change',
      this._handleScreenReaderToggled
    );
    AccessibilityInfo.fetch().done((isEnabled) => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    });
    
  }

  render () {
        
    randomNumber = Math.floor((Math.random() * 20) + 1);
    if (!this.state.questions) {
        return this.renderLoadingView();
      } else if (this.state.count === 6 ) {
        return this.renderWinView();
      } else if (this.state.count === -1 ) {
        return this.renderLoserView();
      }
      var question = this.state.questions[randomNumber];
      var incorrect_answers = this.shuffle(this.state.incorrect_answers)
      return this.renderQuestion(question, incorrect_answers);

  };
    
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }

  IncorrectAnswers(question, incorrect_answers, count) {
    
  _decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

    return question.incorrect_answers.map(function(incorrect_answers, i){
      return(
        <View key={i}>
          <TouchableOpacity 
            accessible={true} 
            accessibilityLabel={incorrect_answers}
            style={styles.answerButton} 
            onPress={() => this._decrementCount() } 
          >
            <Text style={styles.startButtonText}>{incorrect_answers}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  _incrementCount = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
  }


  renderQuestion(question, incorrect_answers, count) {

    return (
      <View style={styles.container} accessible={true} accessibilityLabel={question.question}>
        <View style={styles.roundCountContainer}>
            <View style={styles.roundCount} accessibilityLabel={this.state.count + 'points'}>
            <Text style={styles.roundCountText}>{this.state.count}</Text>
            </View>
        </View>
        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.questionStyle} accessibilityLabel={question.question}>{question.question}</Text>
          </View>
        </View>
        <View style={styles.answerContainer}>
            {this.IncorrectAnswers(question)}
          <TouchableOpacity 
            accessibilityLabel={question.correct_answer} 
            onPress={() => this._incrementCount() } 
            style={styles.answerButton}
          >
            <Text style={styles.startButtonText}>
              {question.correct_answer}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderWinView() {
    
    return (
      <View style={styles.container} accessibilityLabel={'You Won'}>
        <View style={styles.answerContainer}>
          <Crown />
        </View>
        <View style={styles.answerContainer}>
          <TouchableOpacity
            accessible={true} 
            accessibilityLabel={'Go back to start menu'}
            onPress={() => Actions.start()}
            style={styles.startButton}
          >
            <Text 
                style={styles.startButtonText}>You won!
            </Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }

  renderLoserView() {
  
    return (
      <View style={styles.container} accessible={true} accessibilityLabel={'You lost'}>
        <View style={styles.answerContainer}>
          <Shrug />
        </View>
        <View style={styles.answerContainer}>
          <TouchableOpacity
            accessible={true} 
            accessibilityLabel={'Go back to start menu'}
            onPress={() => Actions.start()}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>
                You Lost
            </Text>
          </TouchableOpacity>
          <Text 
            style={styles.startButtonText}>Better luck next time
          </Text>
        </View>
      </View>
    );
  }

}


// ###### STYLING ######

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  roundCountContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    marginTop: 20
  },
  questionContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    marginBottom: 20
  },
  answerContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  roundCount: {
    borderWidth:1,
    borderColor:'#AD1457',
    alignItems:'center',
    justifyContent:'flex-end',
    width:80,
    height:80,
    backgroundColor:'#EC407A',
    borderRadius:100,
    marginBottom: 20
  },
  roundCountText: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    width: '100%',
    minWidth: 320,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C2185B',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 4
  },
  startButtonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
  },
  questionStyle: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default QuestionList;