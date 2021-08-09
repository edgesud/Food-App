
import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Icon,withBadge } from 'react-native-elements'
import { color,parameter } from "../global/style"
export default function Homeheader(){

    const BadgedIcon = withBadge(1)(Icon)
    return(
        <View style={styles.header}>
            <View style={{marginLeft:10,paddingTop:6.5}}>
             <Icon
             type="material-community"
             name="menu" 
            color ="white"
            size={25}
             />
            </View>
            <View>
                <Text style={{fontSize:20,color:"white",fontWeight:'bold',paddingTop:3}}>Xpress Food</Text>
            </View>
            <View style={{marginRight:23,paddingTop:6.5}}>
                <BadgedIcon
                type="material-community"
                name="cart"
                color = 'white'
                size={25}
                />
            </View>
     </View>
    )
}

const styles = StyleSheet.create({

      header:{
          flexDirection:"row",
          backgroundColor:color.button,
          height:parameter.headeHeight,
          justifyContent:'space-between'
      }
})
 