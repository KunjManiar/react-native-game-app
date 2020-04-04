import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//COMPONENTS
import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
              ios: styles.headerIOS,
              android: styles.headerAndroid
            })
          }}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;