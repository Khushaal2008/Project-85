import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

export default class LoginScreen extends Component {

    isUserEqaul = (googleUser,firebaseUser) => {
        if(firebaseUser){
            var providerData = firebaseUser.providerData;
            for (let i = 0; i < providerData.length; i++) {
                if(
                    providerData[i].providerId === 
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID
                    &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()
                 ) {
                        return true
                    }
                
            }
        }
        return false;
    }



    onSignIn = googleUser =>{
        var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
            unsubscribe()
            if(!this.isUserEqaul(googleUser,firebaseUser)) {
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                )
            }
        })
    }

    signInWithGoogleAsync = async ()=>{
        try {
            const result = await Google.logInAsync({
                behaviour:"web",
                androidClientId:
                "295128988595-ra6qlip0u9qr3cdf5t0p8o8srqsugv9r.apps.googleusercontent.com",
                iosClientId:
                "295128988595-tdas7udfjvc4rffhgksu9l1l5k1e4e3s.apps.googleusercontent.com",
                scopes:["profile","email"]
            })

            if(result.type === "success"){
                this.onSignIn(result);
                return result.accessToken;
            } else{
                return {cancelled:true}
            }

        } catch (e){
            console.log(e.message);
            return {error:true}
        }
    }


    render() {
        return (
          <View style={styles.container}>
            <Button
              title="Sign in with Google"
              onPress={() => this.signInWithGoogleAsync()}
            ></Button>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });