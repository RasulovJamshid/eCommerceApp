import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import CartHeader from "./childComponets/Header.js";
import  CartMain  from "./cartComponents/CartMain.js";

function Cart() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cart!</Text>
      </View>
    );
  }

const CartStack=createStackNavigator();

function CartScreen() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle:{
          backgroundColor:"#fff"
        }
      }}
    >
        <CartStack.Screen
          name="CartMain"
          component={CartMain}
          options={{header:CartHeader }}
        />
        <CartStack.Screen
        name="CheckoutOne"
        component={Cart}
        options={{header:CartHeader }}
        />
        <CartStack.Screen
        name="CheckoutTwo"
        component={Cart}
        options={{header:CartHeader }}
         />
        <CartStack.Screen
        name="CheckoutThree"
        component={Cart}
        options={{header:CartHeader }}
       />
        <CartStack.Screen
         name="Accepted"
         component={Cart}       
         options={{header:CartHeader }}              
              />
    </CartStack.Navigator>
  );
}


  
export default CartScreen;