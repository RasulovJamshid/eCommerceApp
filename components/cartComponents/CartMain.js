import * as React from 'react';
import { Text, ScrollView,TextInput,View,StyleSheet } from 'react-native';
import OrderCart from "../childComponets/OrderCart.js";
import {Button  } from "react-native-paper";
import CheckoutOne from './CheckoutOne.js';
//b200f1
function Cart(props) {
    return (
      <ScrollView >
      <OrderCart title="One dress" type="Women"/>
      <OrderCart title="Two dress" type="Man"/>
      <View style={{margin:8}}>
        <Text style={styles.totals}>Totals</Text>

        <View style={styles.subContainer}>
          <Text style={styles.sub}>Sub Total</Text>
          <View  style={styles.line}/> 
          <Text style={styles.price}>$30.00</Text>
        </View>

        <View style={styles.shipContainer}>
          <Text style={styles.shipp}>Shipping</Text>
                   <View  style={styles.line}/>      
          <Text style={styles.price}>$0</Text>
        </View>

        <View style={styles.vaucherContainer}>
          <TextInput placeholder="Enter voucher code" style={styles.vaucherIn}/>
          <Button color="#fff" style={styles.vaucherBtn} >apply</Button>
        </View>

        <View style={{flex:1}}>
          <Button onPress={()=>props.navigation.navigate("CheckoutOne")} color="#fff" style={styles.checkout}>Checkout</Button>
        </View>

      </View>
      
      </ScrollView>
    );
  }

  const styles=StyleSheet.create({
    totals:{
      fontSize:23,fontWeight:"700",margin:15
    },
    subContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginVertical:10
    },
    line:{
      flexGrow:1,
      borderBottomColor: 'gray',
      borderBottomWidth: 2,
      margin:5
    },
    shipContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginVertical:10
    },
    vaucherContainer:{
      flexDirection:"row",
      marginVertical:15
    },
    vaucherIn:{
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
      flexGrow:4,
      paddingHorizontal:20,
      borderWidth:1,
      borderColor:"gray",
      borderRightWidth:0
    },
    vaucherBtn:{
      paddingVertical:8,
      borderRadius:0,
      backgroundColor:"#b200f1",
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
      textAlign:"center"
    },
    sub:{
      fontSize:16
    },
    shipp:{
      fontSize:16
    },
    price:{
      fontSize:18,
      fontWeight:"700"
    },
    checkout:{
      backgroundColor:"#ff00ae",
      padding:5,
      margin:5,
      borderRadius:25,
      flexGrow:1
    },



  })

  export default  Cart;