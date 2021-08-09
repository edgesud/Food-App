import React,{useState,useRef} from 'react';
import { Text,View,StyleSheet,Dimensions, Image} from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements';
import {color,parameter} from "../../global/style";
import { Button } from 'react-native-paper';
import Header from "../../component/Header"
import * as Animatable from "react-native-animatable"
import Swiper from 'react-native-swiper';


export default function Signinwelcomescreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{alignItems:"center",justifyContent:"flex-start",flex:3,paddingTop:20}}>
                <Text style={{fontSize:26,fontWeight:"bold",color:color.button}}>Discover Restaurant</Text>
                <Text style={{fontSize:26,fontWeight:"bold",color:color.button}}>IN Your Area</Text>
            </View>
            <View style={{flex:4,justifyContent:"center",alignItems:'center'}}>
            <Swiper autoplay={true} loop={true} index={1}>
              <View style={styles.slide1}>
              <Image style={{width:"100%",height:"100%",resizeMode:'cover'}} source={require("../../../assets/image/roti.jpg")}/>
              </View>
              <View style={styles.slide2}>
              <Image style={{width:"100%",height:"100%",resizeMode:'cover'}} source={require("../../../assets/image/paneer.jpeg")}/>
              </View>
              <View style={styles.slide3}>
              <Image style={{width:"100%",height:"100%",resizeMode:"cover"}} source={require("../../../assets/image/aloo.jpeg")}/>
              </View>
            </Swiper>          
            </View>
            <View style={{flex:4}}>
            <View>
             <Button style={styles.btn1} mode="contained" labelStyle={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}  onPress={() => navigation.navigate('Signin')} > Sign In
             </Button>
             </View>
            <View style={{marginTop:18}}>
            <Button style={{marginHorizontal:15,backgroundColor:"white",borderWidth:1,borderRadius:12,borderColor:"grey",justifyContent:'center',alignContent:'center',padding:2}} labelStyle={{color:"grey",fontWeight:"bold",textTransform:"uppercase",padding:2,fontSize:16,textAlign:"center"}}>
                 Create an account
             </Button>
            </View>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      btn1:{
         marginTop:80,
       backgroundColor:"#ff8c52",
       justifyContent:"flex-end",
       marginHorizontal:15,
       borderRadius:12,
      padding:5
        
      },
})