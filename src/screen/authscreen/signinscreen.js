import React,{useState,useRef} from 'react';
import { Text,View,StyleSheet,Dimensions, TextInput } from 'react-native';
import { Icon,SocialIcon } from 'react-native-elements';
import {color,parameter} from "../../global/style";
import { Button } from 'react-native-paper';
import Header from "../../component/Header"
import * as Animatable from "react-native-animatable"

export default function signinscreen({navigation}){

 const [textinput2focused,settextinput2focused] = useState(false)
 const textinput1 = useRef(1)
 const textinput2 = useRef(2)

    return(
        <View style={styles.container}>
             <Header title="My Account" type="arrow-left" navigation ={navigation}/> 
             <View>
                 <Text style={styles.txt1}>Sign-In</Text>
             </View>
             <View style={{alignItems:"center",marginTop:10}}>
                 <Text style={styles.txt2}>Please enter the email & Password</Text>
                 <Text style={styles.txt2}>registered with your acoount</Text>
             </View>
             <View style={{marginTop:20}}>
                 <View>
                 <TextInput style={styles.txtinput} placeholder="Email" ref ={textinput1}/>
                 </View>


                 <View style={styles.txtinput2}>
                 <Animatable.View animation ={textinput2focused?"":"fadeInLeft"} duration={400}>
                    <Icon name="lock"
                     type="material"
                     iconStyle = {{color:color.grey3,marginLeft:15}}
                    />
                </Animatable.View>

                 <TextInput style={{width:"80%",paddingLeft:18}}
                   placeholder="Password" 
                   ref ={textinput2}
                   onFocus= {() =>{
                       settextinput2focused(false)
                   }}
                   onBlur= {() =>{
                       settextinput2focused(true)
                   }}
                   />

                <Animatable.View animation ={textinput2focused?"":"fadeInLeft"} duration={400}>
                <Icon name="visibility-off"
                     type="material"
                     iconStyle = {{color:color.grey3,marginRight:10}}
                />
                    </Animatable.View>
                </View>
             
             </View>

             <View >
             <Button  onPress={()=>{navigation.navigate('Home')}} style={styles.btn1} mode="contained" labelStyle={{color:"white",fontSize:18,fontWeight:"bold",textAlign:"center"}}  > Sign In
             </Button>
             </View>
             <View style={{alignItems:"center",marginTop:25}}>
                 <Text style={{textDecorationLine:"underline",color:"#86939e",fontSize:16}}>Forgot Password ?</Text>
             </View>
             <View style={{alignItems:"center",marginTop:15}}>
                 <Text style={{fontWeight:"bold",fontSize:16}}>OR</Text>
             </View>
             <View>
             <SocialIcon
             style={styles.socialicon}
             button
              title="Sign In With Facebook"
              type="facebook"
              onPress={()=>{}}
             />
             </View>

             <View>
             <SocialIcon
             style={styles.socialicon}
             button
              title="Sign In With Google"
              type="google"
              onPress={()=>{}}
             />
             </View>
             <View style={{marginTop:10,marginLeft:20}}>
                 <Text style={{color:"black",fontSize:14,textAlign:"left"}}>New On Xpress Food ?</Text>
             </View>
             <View style={{alignItems:"flex-end",marginRight:25}}>
             <Button style={{marginBottom:50,backgroundColor:"white",borderWidth:1,borderRadius:12,borderColor:"#ff8c52",justifyContent:'center',alignContent:'center'}} labelStyle={{color:"#ff8c52",fontWeight:"bold",textTransform:"lowercase",padding:2,fontSize:16}}>
                 Create an account
             </Button>
             </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    txt1:{
        color:color.button,
        fontWeight:"bold",
        fontSize:20,
        marginLeft:15,
        marginTop:10
    },
    txt2:{
        fontSize:16,
        color:color.grey3
    },
    txtinput:{
        borderWidth:1,
        marginBottom:20,
        borderRadius:12,
        borderColor:"#86939e",
        marginHorizontal:20,
        paddingLeft:15
    },
    txtinput2:{
    borderWidth:1,
    borderColor:"#86939e",
    marginHorizontal:20,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:12,
    flexDirection:'row'

    },

   btn1:{
     marginTop:20,
    backgroundColor:"#ff8c52",
    justifyContent:'center',
    alignItems:"center",
    alignContent:"center",
    borderRadius:12,
    padding:-3,
    marginHorizontal:20,
     
   },
   socialicon:{
      borderRadius:12,
      height:50,
     elevation:5,
      marginHorizontal:20
   }

})