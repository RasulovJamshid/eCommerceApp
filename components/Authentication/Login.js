import React from 'react';
import {ScrollView,View,Text,Image,Dimensions,StatusBar,StyleSheet} from "react-native";
import {Button} from "react-native-paper";
import colors from "../../src/configs/colors";
import {connect} from "react-redux";
import { StackActions } from '@react-navigation/native';
import {LoginForm} from "./Forms";
import { LoginButton, AccessToken } from 'react-native-fbsdk';



const WIDTH=Dimensions.get("window").width/2;


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:[],
            isSigninInProgress:false
        }
    }
   
      render(){
    return(
        <ScrollView style={{flex:1,}}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Image style={styles.img} source={require("../../android/app/img/express.png")}/>
            {/* {console.log(this.props.route)} */}
            <View style={styles.switchCont}>
                <Button color="#000" style={styles.switch}>Sign in</Button>
                <Button onPress={()=>this.props.navigation.dispatch(StackActions.replace("Signup"))} color="#000">Sign up</Button>
            </View>
            <View style={{margin:10}}>
                <LoginForm accessToken={this.props.accessToken} authenticate={this.props.authenticate}/>
            </View>
            
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <View  style={styles.line}/>   
                <Text>or</Text>
              <View  style={styles.line}/>   
            </View>

            <View style={styles.btnThirdP}>
                <LoginButton
                onLoginFinished={
                    (error, result) => {
                    if (error) {
                        console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                        console.log("login is cancelled.");
                    } else {
                        this.props.setFaceBook();
                        this.props.authenticate();
                        }
                    
                    }
                }
                onLogoutFinished={() => console.log("logout.")}/>


            </View>
        </ScrollView>
    )}
}

const styles=StyleSheet.create({
    switch:{borderBottomWidth:3,borderRadius:0,borderColor:colors.primary},
    switchCont:{flexDirection:"row",justifyContent:"space-around",marginVertical:15},
    img:{alignSelf:"center",marginVertical:30,width:WIDTH,height:WIDTH*0.4},
    line:{flexGrow:1,borderBottomColor: 'lightgray',borderBottomWidth: 2,margin:10,marginVertical:30},
    or:{flexDirection:"row",alignItems:"center"},
    btnThirdP:{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},
})

const mapDispatchToProps=(dispatch)=>{
    return{
        authenticate:()=>dispatch({type:"YES"}),
        accessToken:(val)=>dispatch({type:"ASSIGN",payload:val}),
        setFaceBook:()=>dispatch({type:"FACEB"}),
    }
}

export default connect(null,mapDispatchToProps)(Login);