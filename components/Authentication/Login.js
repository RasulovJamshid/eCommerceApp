import React from 'react';
import {View,Text,Image} from "react-native";
import {Button,TextInput} from "react-native-paper";

const Login = (props)=>{
    return(
        <View style={{flex:1}}>
            <Image style={{alignSelf:"center",marginVertical:30}} source={require("../../android/app/img/login.jpg")}/>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </View>
            <View>
                 <TextInput/>
                 <TextInput/>
                 <Button>Login</Button>
            </View>

            <View style={{flexDirection:"row"}}>
              <View  style={{flexGrow:1,borderBottomColor: 'lightgray',borderBottomWidth: 2,margin:10,marginVertical:30}}/>   
                <Text>or</Text>
              <View  style={{flexGrow:1,borderBottomColor: 'lightgray',borderBottomWidth: 2,margin:10,marginVertical:30}}/>   
            </View>

            <View style={{flexDirection:"row"}}>
                <Button icon="google"></Button>
                <Button icon="facebook"></Button>
            </View>
        </View>
    )
}

export default Login;