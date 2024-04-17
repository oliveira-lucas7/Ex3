import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native'
import React from 'react'

import Home from '../Pages/Home';
import Busca from '../Pages/Busca';

const Tab = createBottomTabNavigator();

export default function Rotas() 
{
  return (
    <NavigationContainer>
      <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'home',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Busca"
            component={Busca}
            options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home-search-outline" color={color} size={size}
              />
            ),
          }}
        />
        </Tab.Navigator>
    </NavigationContainer>
  )
}