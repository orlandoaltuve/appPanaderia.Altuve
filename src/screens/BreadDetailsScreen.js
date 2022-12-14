import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'



const BeradDetailsScreen = () => {
  const dispatch = useDispatch()

  const bread = useSelector((state) => state.breads.selected)

  const handleAddItemCart = () => {
    dispatch(addItem(bread))
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>{bread.price}</Text>
        <View style={styles.button}>
          <Button title='Agregar al carrito' onPress={handleAddItemCart} />
        </View>
      </View>
    </View>
  )
}

export default BeradDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "PermanentMarker"
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 20
  },
  price: {
    fontSize: 40,
    fontFamily: "PermanentMarker"
  },
  button: {
    marginTop: 15
  }

})