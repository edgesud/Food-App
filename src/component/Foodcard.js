import React from "react"
import { Text,View,StyleSheet,TouchableOpacity,Dimensions,Image } from "react-native"
import {Icon} from "react-native-elements"
import { color,parameter} from "../global/style"
export default function Foodcard ({
    onPressFoodcard,
    restaurantName,
    delieveryAvailable,
    discountPercent,
    numberofReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) {
  

    return(
       <TouchableOpacity style={{paddingHorizontal:8}}>
           <View style={{...styles.cardView,width:screenWidth}}>
              <Image style={{...styles.image,width:screenWidth}} source={{uri:images}}/>
           </View>
           <View>
               <View>
                   <Text style={{...styles.restaurantName}}>{restaurantName}</Text>
               </View>
               <View style={{flex:1,flexDirection:"row"}}>
                 <View style={styles.distance}>
                 <Icon
                   name="place"
                   type="material"
                   size={18}
                   color={color.grey2}
                   iconStyle={{marginTop:3}}
                 />
                 <Text style={styles.min}>{farAway} Min</Text>
                 </View>
                 <View style={{flex:9,flexDirection:'row'}}>
                   <Text style={styles.address}>{businessAddress}</Text>
                 </View>
               </View>
           </View>

           <View style={styles.review}>
              <Text style={styles.average}>{averageReview}</Text>
              <Text style={{color:'white'}}>{numberofReview} reviews</Text>
           </View>
       </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    cardView:{
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth:1,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderColor:color.grey5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:180,
        resizeMode:"cover"
    },
    restaurantname:{
        fontSize:17,
        fontWeight:"bold",
        color:color.grey4,
        marginTop:5
    },
    distance:{
        flex:4,flexDirection:"row",borderRightColor:color.grey4,paddingHorizontal:5,borderRightWidth:1
    },
    min:{
        fontSize:12,
        fontWeight:"bold",
        color:color.grey3,
        paddingTop:5
    },
    address:{
        fontSize:12,
        paddingTop:5,
        paddingHorizontal:10,
        color:color.grey2
    },
    review:{
        position:"absolute",
        top:0,
        right:10,alignItems:'center',
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,padding:2,
        backgroundColor:'rgba(52,52,52,0.3)'
    },
    average:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3
    }

})