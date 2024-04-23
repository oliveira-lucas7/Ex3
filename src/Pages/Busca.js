import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Busca() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Busca</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
})