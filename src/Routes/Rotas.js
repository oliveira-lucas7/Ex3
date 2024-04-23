import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import { AuthContext } from '../Context/AuthContext';

const Tab = createBottomTabNavigator();

export default function Rotas() 
{

  const {logado} = useContext(AuthContext);

  if( !logado )
  {
    return(
      <Login/>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4BBEE7",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: "black"}
      }}
      >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={35} />
                ),
            }}
            />
            <Tab.Screen
            name="Busca"
            component={Busca}
            options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle" color={color} size={35}
              />
            ),
          }}
        />
        </Tab.Navigator>
    </NavigationContainer>
  )
}