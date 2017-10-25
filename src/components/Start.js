import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 

const Start = () => {
        return (
            <View style={styles.container}>
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
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
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
  startButtonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
});

export default Start;