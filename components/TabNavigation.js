import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from "./Home.js";
import Account from "./Account.js";
import Settings from "./Settings.js";
import Cart from "./Cart.js";
import colors from "../src/configs/colors.js";
// import AsyncStorage from "@react-native-community/async-storage";
import strings from "../src/configs/localization";


const Tab = createMaterialBottomTabNavigator();

//f0edf6
export default class TabNavigation extends React.Component{
    constructor(props){
        super(props);
        // this.getLanguage();

    }

    // getLanguage = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('language')
    //     if(value !== null) {
    //       strings.setLanguage(value);
    //     }
    //   } catch(e) {
    //        console.log(e);
    //   }
    // }


    render(){
        return(
            <Tab.Navigator     
                
                    initialRouteName="Home"
                    backBehavior="initialRoute"
                    activeColor={colors.secondary}
                    inactiveColor="gray"
                    barStyle={{ backgroundColor: '#fff'}}>
                    

                <Tab.Screen name="Home" component={Home} 
                        options={{
                            headerTitle:"Header",
                            tabBarLabel: strings.home,
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                            ),
                          }}
                        />

                        
                <Tab.Screen name="Cart" component={Cart}
                       options={{
                             tabBarBadge:true,
                             tabBarLabel: strings.cart,
                             tabBarIcon: ({ color }) => (
                             <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
                             ),
                       }}/>


                <Tab.Screen name="Account" component={Account}
                        options={{
                            tabBarLabel: strings.account,
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                            ),
                          }}    />

                

                
                <Tab.Screen name="Settings" component={Settings}
                     options={{
                           tabBarLabel: strings.settings,
                           tabBarIcon: ({ color }) => (
                           <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                                                ),
                          }}/>
            </Tab.Navigator>
        )
    }
}


  

