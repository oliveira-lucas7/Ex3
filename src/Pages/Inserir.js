import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native'; // Importe Alert
import { View, Text, ScrollView, TextInput, StyleSheet, Image } from 'react-native';

export default function Inserir() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCEP] = useState("");
  const [numero, setNumero] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  async function Cadastro() {
    await fetch('https://fakestoreapi.com/users',{
        method:"POST",
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(
            {
                email: email,
                username: user,
                password:senha,
                name:{
                    firstname:nome,
                    lastname:sobrenome
                },
                address:{
                    city:cidade,
                    street:rua,
                    number:numero,
                    zipcode:cep,
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:telefone
            }
        )
    })
    .then(res => (res.ok == true) ? res.json() : false)
    .then(json => {
        if (json.id) {
            setSucesso(true);
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        } else {
            setErro(true);
        }
    })
    .catch(err => setErro(true))
  }

  return (
    <ScrollView contentContainerStyle={styles.forms}>
        <View style={styles.containerImage}>
            <Image style={styles.image} source={require('../../images/LogoTec.png')}/>
        </View> 
        <>
            {sucesso ? (
                <Text>Obrigado por se cadastrar! Seu cadastro foi realizado com sucesso!</Text>
            ) : (
                <>
                    <View>
                        <Text style={styles.textTitle}>Cadastro de Usuário</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.inputContainerDois}>
                            <TextInput
                            style={styles.inputConjunto}
                            onChangeText={(digitado) => setNome(digitado)}
                            value={nome}
                            inputMode='text'
                            placeholder="Seu nome"
                            placeholderTextColor='white'
                            />
                            <TextInput
                            style={styles.inputConjunto}
                            onChangeText={(digitado) => setSobrenome(digitado)}
                            value={sobrenome}
                            inputMode='text'
                            placeholder="Seu sobrenome"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setEmail(digitado)}
                            value={email}
                            inputMode='text'
                            placeholder="Seu email"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setSenha(digitado)}
                            value={senha}
                            inputMode='text'
                            placeholder="Sua senha"
                            placeholderTextColor='white'
                            secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setUser(digitado)}
                            value={user}
                            inputMode='text'
                            placeholder="Seu usuário"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setCidade(digitado)}
                            value={cidade}
                            inputMode='text'
                            placeholder="Sua cidade"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setTelefone(digitado)}
                            value={telefone}
                            inputMode='numeric'
                            placeholder="Seu telefone"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setRua(digitado)}
                            value={rua}
                            inputMode='text'
                            placeholder="Sua rua"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setCEP(digitado)}
                            value={cep}
                            inputMode='numeric'
                            placeholder="Seu CEP"
                            placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={(digitado) => setNumero(digitado)}
                            value={numero}
                            inputMode='numeric'
                            placeholder="Número"
                            placeholderTextColor='white'
                            />
                        </View>
                        {/* Adicione mais campos de entrada conforme necessário */}
                        <TouchableOpacity style={styles.cadastro} onPress={Cadastro}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    {erro && <Text>Revise cuidadosamente todos os campos</Text>}
                </>
            )}
        </>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainerDois: {
        flex: 1,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        marginTop: 15
    },
    image: {
        width: "90%",
        height: 130
    },
    containerImage: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: "100%",
        marginTop: 50
    },
    inputConjunto: {
        width: '50%',
        height: 60,
        padding: 10,
        borderRadius: 3,
        backgroundColor: "#595959",
        color: "white"
    },
    input: {
        width: '100%',
        height: 60,
        padding: 10,
        borderRadius: 3,
        backgroundColor: "#595959",
        color: "white"
    },
    forms: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.94,
    },
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '5%',
        marginTop: 35,
        display: "flex",
        flexDirection: "column"
    },
    cadastro: {
        backgroundColor: "#4BBEE7",
        color: "white",
        width: "100%",
        padding: 15,
        borderRadius: 5,
        marginTop: 5,
        height: 60,
        display: "flex",
        margin: 'auto',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50
        // elevation: 3,
    },
});
