import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import Animation from 'lottie-react-native';
import { Actions } from 'react-native-router-flux'; 
import Shrug from './common/Shrug';

const Start = () => {
        return (
            <View style={styles.container}>
                <View style={styles.startContainer}>
                    <TouchableOpacity
                        accessible={true} 
                        accessibilityLabel={'Start quiz with this button'}
                        onPress={() => Actions.question()}
                    >
                        <View style={styles.startButton}>
                            <Text 
                                style={styles.startButtonText}>START QUIZ
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.helpContainer}>
                    <TouchableOpacity
                        accessible={true} 
                        accessibilityLabel={'Go to the help page with this button'}
                        onPress={() => Actions.help()}
                        style={styles.helpButton}
                    >
                            <Text style={styles.helpButtonText}>?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#009688',
    justifyContent: 'space-between',
  },
  startContainer: {
    marginTop: 220,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20
  },
  startButton: {
    width: 200,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C2185B',
    marginLeft: 5,
    marginRight: 5
  },
  helpButton: {
    borderWidth:1,
    borderColor:'#7B1FA2',
    alignItems:'center',
    justifyContent:'flex-end',
    width:60,
    height:60,
    backgroundColor:'#880E4F',
    borderRadius:100
  },
  startButtonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    padding: 10,
  },
  helpButtonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
  }
});

export default Start;