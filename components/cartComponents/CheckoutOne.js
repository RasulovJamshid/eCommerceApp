import React,{useState} from "react";
import { View,Text,ScrollView ,Dimensions,StyleSheet} from "react-native";
import { TextInput,Button } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import Stepper from "../childComponets/Stepper";
import colors from "../../src/configs/colors.js";
import strings from "../../src/configs/localization.js";


const WIDTH=Dimensions.get("window").width-20;


const CheckoutOne =(props)=>{
    const [val,setValue]=useState(true);
    return(
        <ScrollView style={{flex:1}}>
            <Stepper steps={[{title:"address",checked:true},{title:"payments",checked:false},{title:"summary",checked:false}]}/>
            
            {/* <View style={styles.checkbox}>
                <CheckBox onChange={()=>setValue(!val)} tintColors={{true:colors.primary,false:"lightgray"}} value={val}/>
                <Text>{strings.billadd}</Text>
            </View> */}
            <TextInput selectionColor="lightgray" style={styles.input} label={`${strings.street} 1`}/>
            <TextInput selectionColor="lightgray" style={styles.input}label={`${strings.street} 1`}/>
            <TextInput selectionColor="lightgray" style={styles.input} label={strings.city}/>
            <TextInput style={styles.inputHalf} label={strings.state}/>
            <TextInput keyboardType="number-pad" textContentType="postalCode" style={styles.inputHalf} label={strings.postal}/>
            
            <View style={{flexDirection:"row"}}>
                 <Button color="#000" onPress={()=>props.navigation.goBack()} style={styles.back}>{strings.back}</Button>
                 <Button color="#fff" onPress={()=>props.navigation.navigate("CheckoutThree")} style={styles.next}>{strings.next}</Button>
            </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    checkbox:{
        flexDirection:"row",
        margin:5,
        alignItems:"center",
        paddingHorizontal:10
    },
    input:{
        margin:10,
        backgroundColor:"#fff"
    },
    inputHalf:{
        flexGrow:1,
        margin:10,
        backgroundColor:"#fff"
    },
    back:{
        margin:5,
        flexGrow:1,
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius:20
    },
    next:{
        margin:5,
        flexGrow:1,
        backgroundColor:colors.primary,
        borderRadius:20
    }
});

export default CheckoutOne;