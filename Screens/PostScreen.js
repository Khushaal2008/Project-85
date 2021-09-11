import  React , { Component } from 'react';
import {View,Image,StyleSheet,Text,Platform, StatusBar,ImageBackground} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "./PostCard";
import { SafeAreaView } from 'react-native-safe-area-context';

let customFonts = {"My own font":require('../assets/admiration-pains/Admiration-Pains.ttf')}

let images = require('./temp_images.json')

export default class PostScreen extends React.Component
{
    constructor(){
        super();
        this.state={
            post:false,
        }
    }

    componentDidMount(){
        this.loadFontsAsync()
    }

   async loadFontsAsync(){
       await Font.loadAsync(customFonts)
       this.setState({
           post:true,
       })
   }
   
   renderItem=({item: author})=> {
    return <PostCard post={author} navigation={this.props.navigation}/>
}


keyExtractor = (item,index)=>index.toString();
    render()
    {
        if (!this.props.route.params) {
            this.props.navigation.navigate("Home")
          }
          else if (!this.state.fontsLoaded) {
            return <AppLoading />;
          }
        else{
            return(
                <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground style={styles.backgroundImage} source={require('../MyImage.jpg')}>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Storytelling App</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={images}
                  renderItem={this.renderItem}
                />
              </View>
              </ImageBackground>
              

            </View>
          )
        }
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,

      },
      droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
      },
      cardContainer: {
        flex: 0.93
      },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
    });
    