import React from 'react'
import {View, Text, TextInput,  StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(220, 220, 220)',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;