import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";
import store from "./src/store/state";
import AuthNavigation from "./components/Authentication/AuthNavigation";

class App extends React.Component{
  render(){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
    </Provider>
    );
  }
}



export default App;
