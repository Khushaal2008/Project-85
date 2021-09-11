import  React , { Component } from 'react';
import {View,Image,StyleSheet,Text,Platform, StatusBar,TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

let customFonts = {"My own font":require('../assets/admiration-pains/Admiration-Pains.ttf')}

let images = require('./temp_images.json')

export default class PostCard extends React.Component
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
return <PostCard post={author}/>
}


keyExtractor = (item,index)=>index.toString();
render()
{
    if(!this.state.post)
    {
        return <AppLoading/>
    }
    else{
        return(

            <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              story: this.props.author
            })
          }
        >

            <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_1.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_2.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_3.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_4.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_5.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_6.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/image_7.jpg')}
                style={styles.storyImage}/>
<Text style={styles.storyTitleText}>
                        {this.props.post.author}
                    </Text>
  

                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>30K</Text>
                    </View>
                </View>
            </View>
        </View>

        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
    },
    cardContainer: {
     margin: RFValue(13),
      backgroundColor: "blue",
      borderRadius: RFValue(20)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
});
