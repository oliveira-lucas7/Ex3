import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Busca() {
    const [usuario, setUsuario] = useState([]);
    const [error, setError] = useState(false);
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState();

    async function getUsuarios() {
        await fetch('https://fakestoreapi.com/users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => (res.ok == true) ? res.json() : false)
            .then(json => setUsuario(json))
            .catch(err => setError(true))
    }

    useEffect(() => {
        getUsuarios();
    }, [])

    useEffect(() => {
        setFiltro(usuario.filter((item) => item.name.firstname == busca)[0])
    }, [busca])

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../../images/LogoTec.png')}
                />
            </View> 
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(digitado) => setBusca(digitado)}
                    value={busca}
                    inputMode='text'
                    placeholder="Pesquisar"
                    placeholderTextColor='white'
                />
                <TouchableOpacity>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
            </View>
            {filtro && (
                <View style={styles.cardContainer}>
                    <Text style={styles.cardTitle}>Usuário Encontrado</Text>
                    <View style={styles.card}>
                    <MaterialCommunityIcons name="account" size={28} color="white" style={styles.icon} />
                        <Text style={styles.cardText}>
                        <MaterialCommunityIcons name="pencil" size={16} color="white" style={styles.icon} />
                            Nome: {filtro.name.firstname} {filtro.name.lastname}
                        </Text>
                        <Text style={styles.cardText}>
                        <MaterialCommunityIcons name="email" size={16} color="white" style={styles.icon} />
                            E-mail: {filtro.email}
                        </Text>
                        <Text style={styles.cardText}>
                            <MaterialCommunityIcons name="phone" size={16} color="white" style={styles.icon} />
                            Telefone: {filtro.phone}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#161616",
        flex: 1,
        paddingHorizontal: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 12,
        width: "100%",
        alignSelf: "center",
        marginTop: 10,
    },
    input: {
        color: "white",
        flex: 1,
    },
    icon: {
        marginLeft: 10,
    },
    cardContainer: {
        marginTop: 20,
    },
    cardTitle: {
        color: "white",
        fontSize: 27,
        marginBottom: 10,
        textAlign: "center"
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 20,
        alignItems: "center"
    },
    cardText: {
        color: "white",
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: "90%",
        height: 130
    },
    containerImage: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: "100%",
        marginTop: 60
    },
});
