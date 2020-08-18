import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import {connect  } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import TabNavigation from "../TabNavigation";

const Navigation =createStackNavigator();

const AuthNavigation=()=>{
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
        </Navigation.Navigator>
        
    )

}

const AuthNavigationReducer=(props)=>{
    return(
        props.isAuthorized?<TabNavigation/>:<AuthNavigation/>
    )
}

const mapStateToProps=(state)=>{
    return{
      isAuthorized:state.isAuthorized
    }
  }
  
export default connect(mapStateToProps)(AuthNavigationReducer);
  