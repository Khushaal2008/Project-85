import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChange(user=>{
            if(user)
            {
                this.props.navigation.navigate("DashboardScreen")
            }
            else {
                this.props.navigation.navigate("LoginScreen")
            }
        })
    }

render(){
    return(
<View style={styles.container}>
        <Text>Loading</Text>
      </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });