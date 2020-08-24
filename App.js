import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";
import store from "./src/store/state";
import AuthNavigation from "./components/Authentication/AuthNavigation";
// import AsyncStorage from "@react-native-community/async-storage";
// import strings from "./src/configs/localization";

const linking = {
  prefixes: ['https://expressmarket.uz/auth'],
  config: {
      screens: {
        Activation: {
            path: '/:uid/:token',
            
          },
        },
    },
};

class App extends React.Component{
  
//   constructor(props){
//     super(props);
//     const language =this.getLanguage();
    
//     if(language==="ru"||language==="uz"){
//       strings.setLanguage("ru");
//       // console.log("async"+language);
//     }
    
//   }

//   getLanguage = async () => {
//   try {
//     const value = await AsyncStorage.getItem('language')
//     if(value !== null) {
//       console.log("asyns"+value);
//       return value;
//       // strings.setLanguage(value);
//     }
//   } catch(e) {
    
//     console.log(e);
//     return "ru"
//   }
// }

//   componentDidMount(){
//     strings.setLanguage("ru");
//     console.log("inteface:"+strings.getInterfaceLanguage()); 
    
//   }
  render(){
  return (
    <Provider store={store} >
    <NavigationContainer linking={linking} >
      <AuthNavigation/>
    </NavigationContainer>
    </Provider>
    );
  }
}



export default App;
