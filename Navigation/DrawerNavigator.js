import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import StackNavigator from "./StackNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;