import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Produto({title, price, image, category, rating}) {

  const { rate, count } = rating;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const halfStars = rate % 1 > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    // Adicionar ícones de estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(<MaterialIcons key={i} name="star" size={16} color="#FFD700" />);
    }

    // Adicionar ícones de estrelas pela metade
    if (halfStars === 1) {
      stars.push(<MaterialIcons key={'half'} name="star-half" size={16} color="#FFD700" />);
    }

    // Adicionar ícones de estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MaterialIcons key={'empty_' + i} name="star-border" size={16} color="#FFD700" />);
    }

    return stars;
  };


  return (
      <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{uri: image}} style={styles.img}/>
          <TouchableOpacity>
            <Text style={styles.price}>{price}</Text>
          </TouchableOpacity>
          <Text style={styles.category}>Categoria: {category}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingStars}>
          {renderStars()}
          </View>
          <Text style={styles.ratingCount}>{count} avaliações</Text>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: "45%",
        height: 480,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      avaliacao: {
        color: "black"
      },
      title: {
        fontSize: 12,
        width: "110%",
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      category: {
        fontSize: 18,
        marginTop: 20,
        fontStyle: 'italic',
        color: 'blue',
        textAlign: 'center',
      },
      price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 40,
        textAlign: 'center',
        backgroundColor: "#4BBEE7",
        paddingHorizontal: 42,
        paddingVertical: 7,
        borderRadius: 8,
        position: "relative"
      },
      img: {
        width: 120,
        height: 140,
        marginTop: 20
      },
      ratingContainer: {
        display: "flex",
        flexDirection: 'collum',
        alignItems: 'center',
        marginTop: 17,
      },
      ratingStars: {
        flexDirection: 'row',
        marginRight: 5,
      },
})