import React,{useState} from "react"
import { Text,View,StyleSheet,TouchableOpacity, ScrollView, FlatList,Pressable, Image, Dimensions } from "react-native"
import {Icon} from "react-native-elements"
import Header from "../../component/Homeheader"
import {color,parameter} from "../../global/style"
import {filterData,restaurantData} from "../../global/Data"
import Foodcard from "../../component/Foodcard"

const SCREEN_WIDTH = Dimensions.get('window').width
export default function Homescreen(){
    
 const [delivery,setDelivery] = useState(true)
 const [indexCheck,setIndexcheck] = useState("0")

    return(
     <View style={styles.container}>
   <Header/>
 <ScrollView
  stickyHeaderIndices={[0]}
  showsVerticalScrollIndicator={true}
 >
   <View>
        <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-evenly"}}>
               <TouchableOpacity onPress={()=>setDelivery(true)}>
                 <View style={{backgroundColor:delivery?color.button:color.grey4,borderRadius:15,paddingHorizontal:10}}>
                    <Text style={{color:"black",fontSize:20,textAlign:'center',padding:5}}> Delievery </Text>
                 </View>
               </TouchableOpacity>

         <TouchableOpacity onPress={()=>{setDelivery(false)}}>
           <View style={{backgroundColor:delivery?color.grey4:color.button,borderRadius:15,paddingHorizontal:10}}>
           <Text style={{color:"black",fontSize:20,textAlign:'center',padding:5}}> Pick up </Text>
       </View>
       </TouchableOpacity>
        </View>
   </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginTop:20,marginHorizontal:15}}>
   <View style={{flexDirection:"row",justifyContent:'space-evenly',backgroundColor:color.grey5,borderRadius:20,padding:2,width:"80%",paddingVertical:5}}>
     <View style={{flexDirection:'row',alignItems:"center"}}>
       <Icon
         type="material-community"
         name="map-marker"
         color = {color.grey1}
         size={30}
       />
       <Text style={{marginLeft:5,color:color.grey2,fontSize:15}}>22 Bessie Street</Text>
     </View>
     <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:20,paddingHorizontal:12,alignItems:"center"}}>
     <Icon 
       type="material-community"
       name="clock-time-four"
       color ={color.grey1}
       size= {24}
     />
     <Text style={{marginLeft:5,color:color.grey2,fontSize:15}}>Now</Text>
     </View>
     
   </View>
   <View>
     <Icon 
       type="material-community"
       name="tune"
       color ={color.grey1}
       size= {28}
     />
     </View>
     </View>
     
       <View style={{backgroundColor:color.grey5,marginVertical:10,marginTop:20}}>
         <Text style={{fontSize:22,color:color.grey2,fontWeight:"bold",paddingLeft:8,paddingVertical:5}}>Categories</Text>
       </View>
       
     <View>
     <FlatList
     horizontal ={true}
     showsHorizontalScrollIndicator={false}
        data ={filterData}
        keyExtractor={(item)=>item.id}
        extraData={indexCheck}
        renderItem = {({item,index})=>(
          <Pressable onPress={()=>{setIndexcheck(item.id)}}>
            <View style={indexCheck === item.id ? {...styles.smallcardselect}:{...styles.smallcard}}>
              <Image style={{height:60,width:60,borderRadius:30,resizeMode:"cover"}}
                  source={item.image}
              />
              <View>
                <Text style={indexCheck === item.id ? {...styles.selectcard}:{...styles.unselect}}>{item.name}</Text>
              </View>
            </View>
            
          </Pressable>
         
        )}
      
      />
     </View>
     <View style={{backgroundColor:color.grey5,marginVertical:10,marginTop:20}}>
         <Text style={{fontSize:22,color:color.grey2,fontWeight:"bold",paddingLeft:8,paddingVertical:5}}>Free Delievery Now</Text>
       </View>

       <View style={{marginRight:5}} >
         <FlatList
          style={{marginTop:10,marginBottom:10}}
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          data={restaurantData}
          keyExtractor={(item,index)=>index.toString()}
         renderItem = {({item})=>(
           <View>
             <Foodcard
               screenWidth = {SCREEN_WIDTH*0.8}
               images = {item.images}
               restaurantName = {item.restaurantName}
               farAway = {item.farAway}
               businessAddress = {item.businessAddress}
               averageReview ={item.averageReview}
               numberofReview ={item.numberofReview}
             />
           </View>
         )}
         />
       </View>
   </ScrollView>
     </View>
    )
} 

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    smallcardselect:{
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:color.button,
      height:100,
      width:80,
      margin:12,
      padding:5
    },
    smallcard:{
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:color.grey5,
      height:100,
      width:80,
      margin:12,
      padding:5
    },
    selectcard:{
      color:"white"
    },
    unselect:{
      color:color.grey1
    }
})