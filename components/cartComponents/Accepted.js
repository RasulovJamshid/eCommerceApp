import React from "react";
import {ScrollView,View,Text,Image } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../src/configs/colors.js";
import strings from "../../src/configs/localization.js";

const Accepted=(props)=>{
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"space-around"}}>
            <View style={{flex:1,justifyContent:"center"}}>
            <Image style={{width:200,height:200,marginVertical:10}} source={require("../../android/app/img/accepted.png")}/>
            </View>
            <View style={{flex:1,alignItems:"center"}}>
    <Text style={{fontSize:18,fontWeight:"700",margin:10}}>{strings.orderA}</Text>
            <Text style={{margin:10}}>{`${strings.youOn} No.#123-456`}</Text>
            <Button color="#fff" style={{margin:10,width:300,padding:5,backgroundColor:colors.primary,color:"#fff",borderRadius:25}}>{strings.track}</Button>
            </View>
            
        </View>
    )
}
export default Accepted;