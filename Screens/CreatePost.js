import  React , { Component } from 'react';
import {View,Image,StyleSheet,Text,Platform, StatusBar,ImageBackground,ScrollView,TextInput} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';

let customFonts = {"My own font":require('../assets/admiration-pains/Admiration-Pains.ttf')}

let images = require('./temp_images.json')

export default class CreatePost extends React.Component
{
    constructor(){
        super();
        this.state={
            post:false,
            priviewImage:"image_1",
            dropDownHeight:40,
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
   
   
    render()
    {
        if(!this.state.post)
        {
            return <AppLoading/>
        }
        else{

            let priview_Images = {
                image_1:require('../assets/image_1.jpg'),
                image_2:require('../assets/image_2.jpg'),
                image_3:require('../assets/image_3.jpg'),
                image_4:require('../assets/image_4.jpg'),
                image_5:require('../assets/image_5.jpg'),
                image_6:require('../assets/image_6.jpg'),
                image_7:require('../assets/image_7.jpg'),
            }

            return(
                <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground style={styles.backgroundImage} source={require('../123454.png')}>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Post</Text>
                  <Text style={styles.appTitleText}>Create</Text>
                </View>
                <Image style={{width:220,height:140,marginTop:0,marginRight:60,top:65}} source={require('../Fr.png')}/>
              </View>

              <View>
                <ScrollView>
                    <Image
                    source={priview_Images[this.state.priviewImage]}
                    style={styles.previewImage}
                    />

                    <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <Text style={{color:"yellow",fontWeight:"bold"}}>Select an Image👇👇</Text>
                        <DropDownPicker
                          items={[
                            {label: "Image_1", value:"image_1"},
                            {label:"Image_2",value:"image_2"},
                            {label: "Image_3", value:"image_3"},
                            {label:"Image_4",value:"image_4"},
                            {label: "Image_5", value:"image_5"},
                            
                            {label:"Image_6",value:"image_6"},
                            {label: "Image_7", value:"image_7"},
                          ]}
                          defaultValue = {this.state.priviewImage}
                          containerStyle={{
                            height: 40,
                            borderRadius: 20,
                            marginBottom: 10
                          }}
                          onOpen={()=>{
                            this.setState({
                                dropDownHeight : 170
                            })
                        }}
                        onClose={()=>{
                            this.setState({
                                dropDownHeight:40
                            })
                        }}
                        style={{ backgroundColor: "transparent" }}
                        itemStyle={{
                          justifyContent: "flex-start"
                        }}
                        dropDownStyle={{ backgroundColor: "#2f345d" }}
                        labelStyle={{
                          color: "white",
                          fontFamily: "Bubblegum-Sans"
                        }}
                        arrowStyle={{
                          color: "white",
                          fontFamily: "Bubblegum-Sans"
                        }}
                        onChangeItem={ item =>
                       this.setState({
                           priviewImage:item.value
                       })   
                      }
                        />
                    </View>

                                <TextInput
                                style={styles.inputFont}
                                onChangeText ={author => this.setState({author})}
                                placeholder ={"Caption"}
                                placeholderTextColor ="white"
                                />

                </ScrollView>
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
      backgroundColor: "#15193c"
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
      width: "400%",
      height: "700%",
      resizeMode: "contain",
      top:30,
      right:-20
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      fontSize: RFValue(19),
      fontFamily: "Bubblegum-Sans",
      marginTop:-50,
      color:"green",
      marginLeft:100
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "58%",
      height: RFValue(300),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
      height:450,
      marginLeft:22,
      marginTop:-97,
      
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans"
    },
    inputFontExtra: {
      marginTop: RFValue(15)
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5)
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
  });