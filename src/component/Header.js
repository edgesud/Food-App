import React from 'react';
import { Text,View,StyleSheet,Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import {color,parameter} from "../global/style";
export default function Header({title,type,navigation}){
    return(
        <View style={styles.header}>
            <View style={styles.maincontainer}>
                <Icon
                type="material-community"
                name= {type}
                size={28}
                color={color.headertext}
               onPress= {()=>{navigation.goBack()}}
                />
                <View>
                <Text style={styles.headertxt}> {title} </Text>
                </View>
        
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:color.button,
        height:parameter.headeHeight
    },
    maincontainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        marginLeft:20,
        marginTop:5
    },
    headertxt:{
        color:color.headertext,
        fontWeight:"bold",
        fontSize:20,
        marginLeft:30
    }
})