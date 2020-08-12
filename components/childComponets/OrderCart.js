import React,{useState} from "react";
import {Text,View,Image,Dimensions,StyleSheet} from "react-native";
import {IconButton  } from "react-native-paper";
import colors from "../../src/configs/colors.js";

const WIDTH = Dimensions.get('window').width;

const IconGroup=()=>{
    return(
        <View style={{flexDirection:"row",flexShrink:1}}>
                       {
                           [1,2,3,4,5].map(i=>(
                        <IconButton key={i} size={12} style={{marginHorizontal:1}} 
                             icon="star" color="orange"/>
                         ))
                      } 
       </View>
    )
}

const OrderCart=(props)=>{
    const [quantity,quntitySet]=useState(1);
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../android/app/img/foot.jpg")}/>
            <View style={styles.center}>
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                <Text numberOfLines={1} style={styles.type}>{props.type}</Text>
                <IconGroup/>

                <View style={styles.counter}>
                    <IconButton size={15} style={styles.counterBtnLeft} onPress={()=>quntitySet(prev=>prev===0?0:prev-1)} icon="minus" color="black"/>
                        <Text >{quantity}</Text>
                    <IconButton size={15} style={styles.counterBtnRight} onPress={()=>quntitySet(prev=>prev+1)} icon="plus" color="black"/>
                </View>

            </View>
            <View style={styles.right}>
                <Text style={styles.price}>$15</Text>
                <IconButton style={styles.delete} onPress={()=>console.log("trash")} icon="delete-outline" color="#fff"/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexWrap:"nowrap",
        flexDirection:"row",
        margin:15,
        width:WIDTH
    },
    image:{
        width:150,
        height:150,
        borderRadius:15
    },
    title:{
        color:colors.primary,
        fontWeight:"700",
        flexGrow:1,
        margin:3
    },
    type:{
        flexGrow:1,
        margin:3
    },
    counter:{
        color:colors.primary,
        fontWeight:"700",
        flexGrow:1,
        margin:3,
        flexDirection:"row",
        alignItems:"center"
    },
    counterBtnRight:{
        backgroundColor:"lightgray",
        borderTopRightRadius:30,
        borderBottomRightRadius:30
    },
    counterBtnLeft:{
        backgroundColor:"lightgray",
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30
    },
    right:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        margin:10
    },
    price:{
        color:colors.primary,
        fontWeight:"700"
    },
    delete:{
        borderRadius:5,
        backgroundColor:colors.primary
    },
    center:{
        flex:1,
        margin:10
    }

})
export default OrderCart;