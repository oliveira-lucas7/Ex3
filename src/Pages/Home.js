import { View, Text, StyleSheet, ActivityIndicator, FlatList, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';

import Produto from './Produto';

export default function Home() {

  const [ produtos, setProdutos ] = useState([])
  const [ error, setError ] = useState(false);
  const fade = useRef( new Animated.Value(0)).current;

  async function getProdutos() {
    await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        },
    })
    .then(res => (res.ok == true) ? res.json() : false)
    .then(json => setProdutos( json ))
    .catch(err => setError(true))
  }

  useEffect( () => {
    getProdutos();
  }, [])

  
  useFocusEffect(
    React.useCallback(() => {
        fade.setValue(0);
        Animated.timing(fade, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [])
)

  return (
    <Animated.View style={{opacity: fade}}>
    <View style={styles.container}>
      <View style={styles.containerProducts}>
        <Text style={styles.products}>Produtos</Text>
      </View>
      {produtos.length > 0 ? 
        <FlatList
          data={produtos}
          renderItem={({item}) => 
            <Produto title={item.title} 
            price={item.price}
            image={item.image}
            category={item.category}
            rating={item.rating}
          />
        }
          keyExtractor={(item) => item.id}
          contentContainerStyle={{height: ( produtos.length  * 505) / 2 }}
          horizontal={false}  
          numColumns={2}
        />
        :
        <ActivityIndicator size="large" color="#00ff00"/>
      }
    </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white"
  },
  products: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  },
  containerProducts: {
    height: 120,
    alignItems: "center",
    justifyContent: "center"
  }
})