import React,{useState} from "react";
import { View,Text,ScrollView ,StyleSheet,Image} from "react-native";
import { TextInput,Button,IconButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import Stepper from "../childComponets/Stepper";

// const WIDTH=Dimensions.get("window").width-20;


const CheckoutThree =(props)=>{
    const [val,setValue]=useState(true);
    const [pay,setPay]=useState(1);
    return(
        <ScrollView style={{flex:1}}>
            <Stepper steps={[{title:"address",checked:true},{title:"payments",checked:true},{title:"summary",checked:true}]}/>
            
            <Text style={{margin:15,fontSize:16,fontWeight:"700"}}>Summary</Text>
               
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <View style={{margin:5}}>
                        <Image style={{borderRadius:8,width:90,height:90,borderWidth:1,borderColor:"lightgray"}} source={require("../../android/app/img/foot.jpg")}/>
                        <Text style={{fontWeight:"700"}}>One dress</Text>
                        <Text style={{color:"#ff00ae",fontWeight:"700"}}>$15</Text>
                    </View>
                    <View style={{margin:5}}>
                        <Image style={{borderRadius:8,width:90,height:90,borderWidth:1,borderColor:"lightgray"}} source={require("../../android/app/img/nike.jpg")}/>
                        <Text style={{fontWeight:"700"}}>One dress</Text>
                        <Text style={{color:"#ff00ae",fontWeight:"700"}}>$15</Text>
                    </View>
                </View>

            <View style={{flex:1,margin:8}}>
                <View style={styles.checkbox}>
                        <Text>Shipping address</Text>
                        <CheckBox onChange={()=>setValue(!val)} tintColors={{true:"#ff00ae",false:"lightgray"}} value={val}/>
                </View>
                <Text style={{margin:15,fontSize:16,fontWeight:"600"}}>12, Bay brook, Sharps rd, Keilar East, Melbourne, Australia</Text>
                <Button uppercase={false} color="#ff00ae" contentStyle={{justifyContent:"flex-start"}}  >Change</Button>
            </View>

            <View style={{flex:1,margin:8}}>
                <View style={styles.checkbox}>
                        <Text>Payout</Text>
                        <CheckBox onChange={()=>setValue(!val)} tintColors={{true:"#ff00ae",false:"lightgray"}} value={val}/>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                     <TextInput value="**** **** **** 1234" right={<Text>uzcard</Text>} selectionColor="lightgray" style={styles.input}label="Card number"/>
                     <Image style={{height:15,width:80,margin:8}} source={require("../../android/app/img/uzcard.png")}/>
                </View>                
                <Button uppercase={false} color="#ff00ae" contentStyle={{justifyContent:"flex-start"}}  >Change</Button>
            </View>

           
          
            <View  style={styles.line}/>   
            <View style={{flexDirection:"row"}}>
                 <Button color="#000" onPress={()=>props.navigation.goBack()} style={styles.back}>Back</Button>
                 <Button color="#fff" onPress={()=>props.navigation.navigate("Accepted")} style={styles.next}>Pay</Button>
            </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    checkbox:{
        flexDirection:"row",
        margin:5,
        alignItems:"center",
        paddingHorizontal:10,
        justifyContent:"space-between"
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
        marginVertical:30
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

export default CheckoutThree;