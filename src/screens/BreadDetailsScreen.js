import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const BeradDetailsScreen = () => {

  const bread = useSelector((state)=>state.breads.selected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Berad Details Screen</Text>
    </View>
  )
}

export default BeradDetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FDBF",
    alignItems:"center",
    justifyContent:"center"
},
title:{
    fontFamily:"PermanentMarker"
}
})