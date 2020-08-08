import 'react-native-gesture-handler';
import React from 'react';
// import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./components/TabNavigation.js";
// import Login from "./components/Authentication/Login";


// const MainNavigation =createStackNavigator();

// const NavigationStack=(props)=>{
//   return(
//     <MainNavigation.Navigator initialRouteName="Login" >
//       <MainNavigation.Screen options={{headerShown:false,cardStyle:{backgroundColor:"#fff"}}} name="Login" component={Login}/>
//       <MainNavigation.Screen name="TabNavigation" component={TabNavigation}/>     
//     </MainNavigation.Navigator>
//   )
// }

class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    );
  }
}


export default App;
