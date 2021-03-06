import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { exp } from 'react-native/Libraries/Animated/src/Easing'
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio'
import ResultsList from './ResultsList'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
     name: {
        fontWeight: 'bold'
     }
})

export default ResultsDetail