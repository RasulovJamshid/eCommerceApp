import React,{useState} from "react";
import { ActivityIndicator ,View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import {connect  } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import Activation from "./Activation";
import TabNavigation from "../TabNavigation";
import AsyncStorage from "@react-native-community/async-storage";

const Navigation =createStackNavigator();



  function AuthNavigation (){
    
    return(
        <Navigation.Navigator initialRouteName="Login" 
            screenOptions={{headerShown:false,cardStyle:{backgroundColor:"#fff"},transitionSpec:{
                open:{
                animation: 'timing',
                config: {
                    duration:10,
                },
                },
                close:{
                animation: 'timing',
                config: {
                    duration:10,
                },
                },
            }}}>
            <Navigation.Screen name="Login"  component={Login}/>
            <Navigation.Screen name="Signup" component={Signup}/>
            <Navigation.Screen name="Activation" component={Activation}/>
        </Navigation.Navigator>
   )
        }
        
    
    


class AuthNavigationReducer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAuth:false,
            loading:true,
        }
        this.getData();
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('authToken')
          if(value !== null) {
            this.setState({isAuth:true});
            this.setState({loading:false});      
            
       }else{
           this.setState({isAuth:false});
           this.setState({loading:false});  
       }
        } catch(e) {
            this.setState({isAuth:false});     
            this.setState({loading:false});
          }
      }
      
      
    


     render()  {
        
        if(this.state.loading){
           return  <View style={{flex: 1,justifyContent: "center"}}><ActivityIndicator size="large" color="red"/></View>
        }else{
           return  this.state.isAuth?<TabNavigation language={this.props.language}/>:<AuthNavigation/>
        }
        
        
        // return  (this.props.isAuthorized?<TabNavigation language={this.props.language}/>:<AuthNavigation/>)
        
    }
}

const mapStateToProps=(state)=>{
    return{
      isAuthorized:state.isAuthorized,
      language:state.setLanguage
    }
  }
  
export default connect(mapStateToProps)(AuthNavigationReducer);
  