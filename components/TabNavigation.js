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
const Tab = createMaterialBottomTabNavigator();

//f0edf6
export default class TabNavigation extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Tab.Navigator                    
                    initialRouteName="Home"
                    backBehavior="initialRoute"
                    activeColor={colors.primary}
                    inactiveColor="gray"
                    barStyle={{ backgroundColor: '#fff' }}>
                    

                <Tab.Screen name="Home" component={Home} 
                        options={{
                            headerTitle:"Header",
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                            ),
                          }}
                        />

                        
                <Tab.Screen name="Cart" component={Cart}
                       options={{
                             tabBarBadge:true,
                             tabBarLabel: 'Cart',
                             tabBarIcon: ({ color }) => (
                             <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
                             ),
                       }}/>


                <Tab.Screen name="Account" component={Account}
                        options={{
                            tabBarLabel: 'Account',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                            ),
                          }}    />

                

                
                <Tab.Screen name="Settings" component={Settings}
                     options={{
                           tabBarLabel: 'Settings',
                           tabBarIcon: ({ color }) => (
                           <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                                                ),
                          }}/>
            </Tab.Navigator>
        )
    }
}


  

