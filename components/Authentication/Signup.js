import React from 'react';
import {ScrollView,View,Text,Image,Dimensions,StatusBar,StyleSheet} from "react-native";
import {Button,TextInput,HelperText} from "react-native-paper";
import colors from "../../src/configs/colors";
import {connect} from "react-redux";
import { StackActions } from '@react-navigation/native';

const WIDTH=Dimensions.get("window").width/3;

const Signup = (props)=>{
    return(
        <ScrollView style={{flex:1}}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image style={styles.img} source={require("../../src/assets/login.jpg")}/>
            <View style={styles.switchCont}>
                <Button onPress={()=>props.navigation.dispatch(StackActions.replace("Login"))} color="#000" >Sign in</Button>
                <Button color="#000" style={styles.switch}>Sign up</Button>
            </View>
            <View style={{margin:10}}>
                <TextInput  style={styles.input} underlineColor={colors.primary} label="username"/>
                <TextInput style={styles.input} underlineColor={colors.primary} label="email"/>
                <TextInput style={styles.input} underlineColor={colors.primary} label="password"/>
                <TextInput style={styles.input} underlineColor={colors.primary} label="confirm password"/>
                
                <Button onPress={props.authenticate} color="#fff" style={styles.register}>Register</Button>
            </View>

            <View style={styles.or}>
              <View  style={styles.line}/>   
                <Text>or</Text>
              <View  style={styles.line}/>   
            </View>

            <View style={styles.btnThirdP}>
                <Button uppercase={false} style={{fontSize:22}} icon="google" color="red">Google</Button>
                <Button uppercase={false} icon="facebook" color="blue">Facebook</Button>
            </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    input:{margin:5,backgroundColor:"#fff"},
    switch:{borderBottomWidth:3,borderRadius:0,borderColor:colors.primary},
    switchCont:{flexDirection:"row",justifyContent:"space-around"},
    img:{alignSelf:"center",marginVertical:30,width:WIDTH,height:WIDTH*0.8},
    line:{flexGrow:1,borderBottomColor: 'lightgray',borderBottomWidth: 2,margin:10,marginVertical:30},
    or:{flexDirection:"row",alignItems:"center"},
    btnThirdP:{flexDirection:"row",justifyContent:"space-around"},
    register:{backgroundColor:colors.primary,margin:15,paddingVertical:5},
})

const mapDispatchToProps=(dispatch)=>{
    return{
        authenticate:()=>dispatch({type:"YES"})
    }
}

export default connect(null,mapDispatchToProps)(Signup);