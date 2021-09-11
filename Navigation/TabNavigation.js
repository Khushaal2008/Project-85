import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';
import { RFValue } from "react-native-responsive-fontsize";
import {StyleSheet} from 'react-native';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigation = () =>{
    return(
        <Tab.Navigator
        labeled={false}
         barStyle ={styles.bottomTabStyle}
        screenOptions ={({route})=>({
            tabBarIcon:({focused,color,size}) =>{
                let icon;
                if(route.name ==='Feed')
                {
                    icon = focused
                    ? 'information-circle'
                    : 'information-circle-outline'
                }
                else if(route.name === 'CreatePost')
                {
                    icon = focused
                    ? 'pencil'
                    : 'pencil-outline';
                }
                return <Ionicons name={icon} size={RFValue(25)} color={color} style={styles.icons}/>
            },
        })}
       
            activeColor = {"#ffc123"}
             inactiveColor = {'white'}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "lightblue",
    height: "8%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigation;