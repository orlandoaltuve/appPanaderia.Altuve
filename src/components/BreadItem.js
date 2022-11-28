import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity
        onPress={()=> onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>

                </View>

            </View>

        </TouchableOpacity>
    )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem:{
        padding:20,
        margin:10,
        borderRadius:3,
        backgroundColor:'#ccc'
    },
    title:{
        fontSize:20,
        fontFamily:"PermanentMarker"
    },
    details:{
        fontSize:18
    }
})