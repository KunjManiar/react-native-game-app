import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

//COMPONENTS
import MainButton from '../components/MainButton';

//STYLES
import DefaultStyles from '../constants/default-styles'

//CONSTATNS
import Colors from '../constants/Colors'

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>The game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image
                        // fadeDuration={1000}
                        source={require('../assets/success.png')}
                        // source={{ uri: 'https://explorersweb.com/wp-content/uploads/2019/07/nims-k2-up.jpg' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View >
                <View style={styles.resultContainer}>
                    <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>Your Phone needed
                    <Text style={{ ...DefaultStyles.bodyText, ...styles.highlight }}> {props.roundsNumber}</Text> rounds to guess the number
                    <Text style={{ ...DefaultStyles.bodyText, ...styles.highlight }}>{' '}{props.userNumber}</Text>
                    </Text>



                </View>
                <MainButton onPress={props.onRestart} >New Game</MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius: 200
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: "center",
        // alignContent: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20

    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    }
});

export default GameOverScreen;
