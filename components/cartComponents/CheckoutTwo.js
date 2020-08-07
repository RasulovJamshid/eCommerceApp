import React,{useState} from "react";
import { View,Text,ScrollView ,StyleSheet,Image} from "react-native";
import { TextInput,Button,IconButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import Stepper from "../childComponets/Stepper";

// const WIDTH=Dimensions.get("window").width-20;


const CheckoutOne =(props)=>{
    const [val,setValue]=useState(true);
    const [pay,setPay]=useState(1);
    return(
        <ScrollView style={{flex:1}}>
            <Stepper steps={[{title:"address",checked:true},{title:"payments",checked:true},{title:"summary",checked:false}]}/>
            
            <View style={styles.payContainer}>
                <IconButton size={35} onPress={()=>setPay(0)} icon="format-paragraph" color={pay===0?"white":"lightgray"} style={pay===0?styles.payEnable:styles.payDisable}/>
                <IconButton size={35} onPress={()=>setPay(1)} icon="credit-card-outline" color={pay===1?"white":"lightgray"} style={pay===1?styles.payEnable:styles.payDisable}/>
                <IconButton size={35} onPress={()=>setPay(2)} icon="wallet" color={pay===2?"white":"lightgray"} style={pay===2?styles.payEnable:styles.payDisable}/>
            </View>
            
            <TextInput selectionColor="lightgray" style={styles.input} label="Name of card"/>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <TextInput  right={<Text>uzcard</Text>} selectionColor="lightgray" style={styles.input}label="Card number"/>
            <Image style={{height:15,width:80,margin:8}} source={require("../../android/app/img/uzcard.png")}/>
            </View>
            <TextInput selectionColor="lightgray" style={styles.input} label="Expiry Date"/>
           
            <View style={styles.checkbox}>
                    <CheckBox onChange={()=>setValue(!val)} tintColors={{true:"#ff00ae",false:"lightgray"}} value={val}/>
                    <Text>Save this card settings</Text>
            </View>
           
            <View  style={styles.line}/>   
            <View style={{flexDirection:"row"}}>
                 <Button color="#000" onPress={()=>props.navigation.goBack()} style={styles.back}>Back</Button>
                 <Button color="#fff" onPress={()=>props.navigation.navigate("CheckoutThree")} style={styles.next}>Next</Button>
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
        backgroundColor:"#fff",
        flexGrow:1
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
        borderColor:"#ff00ae",
        borderRadius:20
    },
    next:{
        margin:5,
        flexGrow:1,
        backgroundColor:"#ff00ae",
        borderRadius:20
    },
    line:{
        flexGrow:1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 2,
        margin:10,
    },
    payDisable:{
        borderWidth:1,borderColor:"lightgray",backgroundColor:"#fff",borderRadius:5
    },
    payEnable:{
        backgroundColor:"#ff00ae",borderRadius:5
    },
    payContainer:{
        flexDirection:"row",justifyContent:"space-between",margin:15
    }
});

export default CheckoutOne;