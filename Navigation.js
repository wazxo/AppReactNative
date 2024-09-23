import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // Importa los iconos

// Screens
import HomeScreen from "./screens/HomeScreens";
import SumadoraScreen from "./screens/SumadoraScreens";
import VideoScreen from "./screens/VideoScreen";
import ConversoraScreen from "./screens/ConversoraScreen";
import TablaMultiplicar from "./screens/TablaMultiScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} /> // Ícono para Home
          ),
        }}
      />
      <Tab.Screen
        name="Sumadora"
        component={SumadoraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calculator-outline" size={size} color={color} /> // Ícono para Sumadora
          ),
        }}
      />
      <Tab.Screen
        name="Conversora"
        component={ConversoraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="swap-horizontal-outline" size={size} color={color} /> // Ícono para Conversora
          ),
        }}
      />
      <Tab.Screen
        name="Multiplicar"
        component={TablaMultiplicar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="grid-outline" size={size} color={color} /> // Ícono para Multiplicar
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="videocam-outline" size={size} color={color} /> // Ícono para Video
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
