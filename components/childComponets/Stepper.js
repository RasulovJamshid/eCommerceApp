import React from "react";
import { View,StyleSheet} from "react-native";
import colors from "../../src/configs/colors.js";

const Stepper =(props)=>{
    return(
        <View style={styles.stepperCont}>
            <View style={styles.stepOut}>
                {props.steps[0].checked&&<View style={styles.stepIn}/>}
            </View>
               <View  style={styles.line}/>
            <View style={styles.stepOut}>
                {props.steps[1].checked&&<View style={styles.stepIn}/>}
            </View>
               <View  style={styles.line}/>
            <View style={styles.stepOut}>
                {props.steps[2].checked&&<View style={styles.stepIn}/>}
            </View>
        </View>
    )
}


const styles =StyleSheet.create({
    stepperCont:{
        margin:5,
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
        alignItems:"center"
    },
    stepOut:{
        borderColor:"gray",
        width:30,
        height:30,
        borderRadius:25,
        borderWidth:1
        ,alignItems:'center',
        justifyContent:"center"
    },
    line:{
        flexGrow:1,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    stepIn:{
        width:20,
        height:20,
        borderRadius:15,
        backgroundColor:colors.primary
    },
});
export default Stepper;