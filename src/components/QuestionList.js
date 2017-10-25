import React, { Component } from 'react';
import { View, Text, StyleSheet, List, FlatList } from 'react-native';
import QuestionDetails from './QuestionDetails';
import Spinner from './common/Spinner';
import { Actions } from 'react-native-router-flux'; // New code

class QuestionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          questions: null
        };
      }
      shuffle(incorrect_answers){
        ///shuffle using some algo
       return incorrect_answers
       }

      componentDidMount() {
        this.fetchData();
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

    render () {
      
      randomNumber = Math.floor((Math.random() * 20) + 1);
      
      console.log(this.state.questions);
      if (!this.state.questions) {
          return this.renderLoadingView();
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

  renderItem({ item, index }) {
      return <Text style={styles.startButton}>{item}</Text>;
  }

  IncorrectAnswers(question, incorrect_answers) {
    return question.incorrect_answers.map(function(incorrect_answers, i){
      return(
        <View key={i}>
          <Text style={styles.startButton}>{incorrect_answers}</Text>
        </View>
      );
    });
  };
  

  renderQuestion(question, incorrect_answers) {
    console.log(question.incorrect_answers);

    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
        >
          1
        </Text>
        <Text style={styles.questionStyle}>{question.question}</Text>
        <View>
          {this.IncorrectAnswers(question)}
        
        <Text 
          onPress={() => Actions.question()} 
          style={styles.startButton}
        >
          {question.correct_answer}
        </Text>
        </View>
      </View>
    );
  }
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
    color: '#ffffff',
  },
  startButton: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#E91E63',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C2185B',
    marginLeft: 5,
    marginRight: 5
  },
  questionStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
});

export default QuestionList;