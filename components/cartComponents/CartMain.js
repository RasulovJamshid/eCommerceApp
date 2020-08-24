import * as React from 'react';
import { Text, ScrollView,TextInput,View,StyleSheet } from 'react-native';
import OrderCart from "../childComponets/OrderCart.js";
import {Button  } from "react-native-paper";
import colors from "../../src/configs/colors.js";
import strings from "../../src/configs/localization.js";
import { connect } from "react-redux";
//b200f1
function Cart(props) {
      
    return (
      <ScrollView >
        {console.log(props.cartQuantity)}
        {props.cartQuantity.map((i,j)=>(
          <OrderCart key={j} title="One dress" type="Women"/>
        ))}
      
      <OrderCart title="Two dress" type="Man"/>
      <View style={{margin:8}}>
        <Text style={styles.totals}>{strings.total}</Text>

        <View style={styles.subContainer}>
          <Text style={styles.sub}>{strings.subtotal}</Text>
          <View  style={styles.line}/> 
          <Text style={styles.price}>300.000 {strings.currency}</Text>
        </View>

        <View style={styles.shipContainer}>
          <Text style={styles.shipp}>{strings.shipping}</Text>
                   <View  style={styles.line}/>      
          <Text style={styles.price}>0 {strings.currency}</Text>
        </View>

        <View style={styles.vaucherContainer}>
          <TextInput placeholder={strings.enterVo} style={styles.vaucherIn}/>
          <Button color="#fff" style={styles.vaucherBtn} >{strings.apply}</Button>
        </View>

        <View style={{flex:1}}>
          <Button onPress={()=>props.navigation.navigate("CheckoutOne")} color="#fff" style={styles.checkout}>{strings.checkout}</Button>
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
      backgroundColor:colors.primary,
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
      backgroundColor:colors.primary,
      padding:5,
      margin:5,
      borderRadius:25,
      flexGrow:1
    },



  })

  const mapStateToProps=(state)=>({
    cartQuantity:state.cartCounter,
  })
  
  export default  connect(mapStateToProps)(Cart);