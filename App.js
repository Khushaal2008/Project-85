import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Screens/Feed';
import CreatePost from './Screens/CreatePost';
import TabNavigation from './Navigation/TabNavigation'
import DrawerNavigator from './Navigation/DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

