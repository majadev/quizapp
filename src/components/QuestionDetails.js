import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const QuestionDetails = ({question}) => {
    return (
            <TouchableOpacity>
                        <View style={styles.imageContainerStyle}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.headerTextStyle}>{question.question}</Text>
                            </View>
                        </View>
            </TouchableOpacity>
    );
};

const styles = {  
    headerViewStyle: {
        flex: 6
    },  
    headerTextStyle: {
        fontSize: 28,
        color: '#fff',
        position: 'absolute'
    },
    imageContainerStyle: {
        flex: 1,
        height: 300,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'purple', 
        opacity: 0.6
    }
};

export default QuestionDetails;